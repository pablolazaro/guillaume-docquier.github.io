import { Item } from "./item";

export class RawMaterial extends Item {
    constructor(id, name, professions, rarities, craftingMaterials, craftingQuantity) {
        super(id, name, professions, rarities, craftingMaterials, craftingQuantity);

        this.isCraftable = false;
    }

    getCraftingRank() {
        return 0;
    }
};
