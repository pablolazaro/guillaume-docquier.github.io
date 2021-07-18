import { Item } from "./item";

export class GenericMaterial extends Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName = "") {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName);

        this.isGeneric = true;
    }
};
