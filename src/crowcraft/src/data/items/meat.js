import { RawMaterial, Rarities } from "models";

export class Meat extends RawMaterial {
    constructor(
        name = "meat",
        professions = [],
        rarities = [Rarities.Common],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
