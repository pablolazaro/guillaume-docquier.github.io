import { String, Sorting } from "utils";
import { Craft } from "../craft";
import { CraftingMaterial } from "../crafting-material";

export class Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity) {
        this.name = name;
        this.professions = professions;
        this.rarities = rarities.sort(Sorting.ascending(rar => rar.rank));
        this.craftingMaterials = craftingMaterials;
        this.craftingQuantity = craftingQuantity;

        this.id = String.decapitalize(this.constructor.name);
        this.craftingRank = this.getCraftingRank();
        this.rarity = this.rarities[0];
        this.isCraftable = true;
    }

    createNew() {
        return new this.constructor();
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
            rawMaterials.sort(Sorting.descending(rawMaterial => rawMaterial.craftingRank));

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

