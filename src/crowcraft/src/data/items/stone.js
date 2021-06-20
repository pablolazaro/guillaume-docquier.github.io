import { RawMaterial, Rarities } from "models";

export class Stone extends RawMaterial {
    constructor(
        name = "stone",
        professions = [],
        rarities = [Rarities.Poor, Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}