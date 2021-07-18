///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, CraftingMaterial, Rarities, Professions } from "models";
import { Mineral } from "./mineral";

export class GroundMineral extends GenericMaterial {
    constructor(
        name = "ground mineral",
        professions = [Professions.Alchemist],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [
            new CraftingMaterial(1, new Mineral()),
        ],
        craftingQuantity = 1,
        craftingName = "grind resource"
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName);
    }
}
