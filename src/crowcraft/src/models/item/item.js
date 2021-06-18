import { String, Sorting } from "utils";
import { Craft } from "../craft";
import { CraftingMaterial } from "../crafting-material";

export class Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity) {
        this._name = name;
        this.professions = professions;
        this.rarities = rarities.sort(Sorting.ascending(rar => rar.rank));
        this._craftingMaterials = craftingMaterials;
        this.craftingQuantity = craftingQuantity;

        this._id = String.decapitalize(this.constructor.name);
        this.craftingRank = this.getCraftingRank();
        this.rarity = this.rarities[0];
        this.isCraftable = true;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get craftingMaterials() {
        return this._craftingMaterials;
    }

    createNew() {
        return new this.constructor();
    }

    getAssetId() {
        return this.id;
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
        let craftingMaterials = [...this.craftingMaterials];
        let rank = this.craftingRank;
        while (rank > 1) {
            rank -= 1;
            craftingMaterials.sort(Sorting.descending(rawMaterial => rawMaterial.item.craftingRank));

            const craftingSet = {};
            let i = 0;
            for (i; craftingMaterials[i].item.craftingRank === rank; i++) {
                const materialToCraft = craftingMaterials[i];
                if (craftingSet[materialToCraft.item.id] === undefined) {
                    craftingSet[materialToCraft.item.id] = new CraftingMaterial(materialToCraft.quantity, materialToCraft.item);
                }
                else {
                    craftingSet[materialToCraft.item.id].quantity += materialToCraft.quantity;
                }
            }

            craftingMaterials = craftingMaterials.slice(i, craftingMaterials.length);

            for (const materialToCraft of Object.values(craftingSet)) {
                const numberOfCrafts = Math.ceil(materialToCraft.quantity / materialToCraft.item.craftingQuantity);
                const materialsForThisCraft = materialToCraft.item.craftingMaterials.map(mat => new CraftingMaterial(mat.quantity * numberOfCrafts, mat.item));
                crafts.push(new Craft(materialsForThisCraft, new CraftingMaterial(numberOfCrafts * materialToCraft.item.craftingQuantity, materialToCraft.item)));
                craftingMaterials = craftingMaterials.concat(materialsForThisCraft);
            }
        }

        crafts.reverse();

        const rawMaterialsSet = {};
        for (const craftingMaterial of craftingMaterials) {
            if (rawMaterialsSet[craftingMaterial.item.id] === undefined) {
                rawMaterialsSet[craftingMaterial.item.id] = new CraftingMaterial(craftingMaterial.quantity, craftingMaterial.item);
            }
            else {
                rawMaterialsSet[craftingMaterial.item.id].quantity += craftingMaterial.quantity;
            }
        }

        return {
            crafts,
            rawMaterials: Object.values(rawMaterialsSet)
        }
    }
};

