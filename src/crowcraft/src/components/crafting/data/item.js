export class CraftingMaterial {
    constructor(quantity, item) {
        this.quantity = quantity;
        this.item = item;
    }
};

export class Craft {
    constructor(craftingMaterials, craftingResult) {
        this.craftingMaterials = craftingMaterials;
        this.craftingResult = craftingResult;
    }
}

export class Item {
    constructor(id, name, profession, rarities, craftingMaterials, craftingQuantity) {
        this.id = id;
        this.name = name;
        this.profession = profession;
        this.rarities = rarities;
        this.craftingMaterials = craftingMaterials;
        this.craftingQuantity = craftingQuantity;
        this.craftingRank = this.getCraftingRank();
    }

    getCraftingRank() {
        return Math.max(...this.craftingMaterials.map(mat => mat.item.craftingRank)) + 1;
    }

    getCraftingOrder() {
        const crafts = [new Craft(this.craftingMaterials, new CraftingMaterial(1, this))];
        let rawMaterials = this.craftingMaterials;
        let rank = this.craftingRank;
        while (rank > 1) {
            rank -= 1;
            rawMaterials.sort(compareCraftingRank);

            const craftingSet = {};
            let i = 0;
            for (i; rawMaterials[i].item.craftingRank === rank; i++) {
                const materialToCraft = rawMaterials[i];
                if (craftingSet[materialToCraft.item.id] === undefined) {
                    craftingSet[materialToCraft.item.id] = new CraftingMaterial(materialToCraft.quantity, materialToCraft.item);
                }
                else {
                    craftingSet[materialToCraft.item.id].quantity += materialToCraft.quantity;
                }
            }

            rawMaterials = rawMaterials.slice(i, rawMaterials.length);

            for (const materialToCraft of Object.values(craftingSet)) {
                const numberOfCrafts = Math.ceil(materialToCraft.quantity / materialToCraft.item.craftingQuantity);
                const materialsForThisCraft = materialToCraft.item.craftingMaterials.map(mat => new CraftingMaterial(mat.quantity * numberOfCrafts, mat.item));
                crafts.push(new Craft(materialsForThisCraft, new CraftingMaterial(numberOfCrafts * materialToCraft.item.craftingQuantity, materialToCraft.item)));
                rawMaterials = rawMaterials.concat(materialsForThisCraft);
            }
        }

        crafts.reverse();

        const rawMaterialsSet = {};
        for (const rawMaterial of rawMaterials) {
            if (rawMaterialsSet[rawMaterial.item.id] === undefined) {
                rawMaterialsSet[rawMaterial.item.id] = new CraftingMaterial(rawMaterial.quantity, rawMaterial.item);
            }
            else {
                rawMaterialsSet[rawMaterial.item.id].quantity += rawMaterial.quantity;
            }
        }

        return {
            crafts,
            rawMaterials: Object.values(rawMaterialsSet)
        }
    }

    getRawMaterials() {
        const rawMaterials = Object.values(this._getRawMaterials());
        for (const rawMaterial of rawMaterials) {
            rawMaterial.quantity = Math.ceil(rawMaterial.quantity);
        }

        return rawMaterials;
    }

    _getRawMaterials() {
        const rawMaterials = {};
        for (const craftingMaterial of this.craftingMaterials) {
            const materials = craftingMaterial.item._getRawMaterials();
            const numberOfCrafts = craftingMaterial.quantity / craftingMaterial.item.craftingQuantity;
            for (const material of Object.values(materials)) {
                if (rawMaterials[material.item.id] === undefined) {
                    rawMaterials[material.item.id] = material
                    rawMaterials[material.item.id].quantity *= numberOfCrafts;
                }
                else {
                    rawMaterials[material.item.id].quantity += material.quantity * numberOfCrafts;
                }
            }
        }

        return rawMaterials;
    }
};

export class RawMaterial extends Item {
    getCraftingRank() {
        return 0
    }

    _getRawMaterials() {
        return {
            [this.id]: new CraftingMaterial(1, this)
        }
    }
}

export const Rarities = {
    Poor: "grey",
    Common: "white",
    Uncommon: "green",
    Rare: "blue",
    Epic: "purple",
    Legendary: "orange"
};

export const Professions = {
    Alchemist: "alchemist",
    Armorsmith: "armorsmith",
    Jewelcrafter: "jewelcrafter",
    Leatherworker: "leatherworker",
    Necromancer: "necromancer",
    Runemaker: "runemaker",
    Stonemason: "stonemason",
    Weaponsmith: "weaponsmith",
    Woodworker: "woodworker"
};


const compareCraftingRank = (a, b) => a.item.craftingRank > b.item.craftingRank ? -1 : a.item.craftingRank < b.item.craftingRank ? 1 : 0;