///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, CraftingMaterial, Rarities, Professions } from "models";
import { RoughGem } from "./rough-gem";

export class PowderedGem extends GenericMaterial {
    constructor(
        name = "powdered gem",
        professions = [Professions.Alchemist],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [
            new CraftingMaterial(1, new RoughGem()),
        ],
        craftingQuantity = 1,
        craftingName = "grind resource"
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName);
    }
}
