import { RawMaterial, Rarities } from "components/crafting/data/item";

export class Ore extends RawMaterial {
    constructor(
        name = "ore",
        professions = [],
        rarities = [Rarities.Poor, Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}