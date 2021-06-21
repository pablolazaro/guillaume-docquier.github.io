import { Item } from "./item";

export class RawMaterial extends Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);

        this.isCraftable = false;
    }

    getCraftingRank() {
        return 0;
    }
};
