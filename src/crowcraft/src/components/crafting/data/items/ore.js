import { RawMaterial, Rarities } from "../item";

export class Ore extends RawMaterial {
    constructor(
        id = "ore",
        name = "ore",
        professions = [],
        rarities = [Rarities.Poor, Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1) {
        super(id, name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}