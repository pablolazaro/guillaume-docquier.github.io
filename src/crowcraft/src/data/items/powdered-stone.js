///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, CraftingMaterial, Rarities, Professions } from "models";
import { Stone } from "./stone";

export class PowderedStone extends GenericMaterial {
    constructor(
        name = "powdered stone",
        professions = [Professions.Alchemist],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [
            new CraftingMaterial(1, new Stone()),
        ],
        craftingQuantity = 1,
        craftingName = "grind resource"
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName);
    }
}
