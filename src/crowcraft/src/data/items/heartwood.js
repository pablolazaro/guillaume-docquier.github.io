import { GenericMaterial, Rarities } from "models";

export class Heartwood extends GenericMaterial {
    constructor(
        name = "heartwood",
        professions = [],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
