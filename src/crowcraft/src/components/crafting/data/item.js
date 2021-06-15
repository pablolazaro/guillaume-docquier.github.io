import { String } from "utils";

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
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity) {
        this.name = name;
        this.professions = professions;
        this.rarities = rarities;
        this.craftingMaterials = craftingMaterials;
        this.craftingQuantity = craftingQuantity;

        this.id = String.decapitalize(this.constructor.name);
        this.craftingRank = this.getCraftingRank();
        this.rarity = rarities[0];
        this.isCraftable = true;
    }

    setRarity(rarity) {
        if (this.rarities.includes(rarity)) {
            this.rarity = rarity;
        }
        else {
            this.rarity = this.rarities[0]
        }

        for (const craftingMaterial of this.craftingMaterials) {
            craftingMaterial.item.setRarity(this.rarity);
        }
    }

    isCustomizable() {
        return this.getCustomizableComponents().length > 0;
    }

    getCustomizableComponents() {
        let customizableComponents = [];
        for (const craftingMaterial of this.craftingMaterials) {
            customizableComponents = customizableComponents.concat(craftingMaterial.item.getCustomizableComponents());
        }

        return customizableComponents;
    }

    getCraftingRank() {
        return Math.max(...this.craftingMaterials.map(mat => mat.item.craftingRank)) + 1;
    }

    getCraftingRundown() {
        const crafts = [new Craft(this.craftingMaterials, new CraftingMaterial(1, this))];
        let rawMaterials = [...this.craftingMaterials];
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
};

export class RawMaterial extends Item {
    constructor(id, name, professions, rarities, craftingMaterials, craftingQuantity) {
        super(id, name, professions, rarities, craftingMaterials, craftingQuantity);

        this.isCraftable = false;
    }

    getCraftingRank() {
        return 0;
    }
}

export class CustomizableComponent extends Item {
    getCustomizableComponents() {
        return [this];
    }

    getCustomizationOptions() {
        throw new Error(`${this.id} must implement getCustomizationOptions`);
    }

    getCustomizationEffect() {
        throw new Error(`${this.id} must implement getCustomizationEffect`);
    }

    customize(other) {
        this.id = other.id;
        this.name = other.name;
        this.craftingMaterials = other.craftingMaterials;
        this.setRarity(this.rarity);
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