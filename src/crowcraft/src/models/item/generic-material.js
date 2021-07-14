import { RawMaterial } from "./raw-material";

export class GenericMaterial extends RawMaterial {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);

        this.isGeneric = true;
    }
};
