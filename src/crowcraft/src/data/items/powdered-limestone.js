///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Limestone } from "./limestone";

export class PowderedLimestone extends Item {
    constructor() {
        super(
            "powdered limestone",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Limestone()),
            ],
            1,
            "grind resource"
        );
    }
}
