///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { RoughTopaz } from "./rough-topaz";

export class PowderedTopaz extends Item {
    constructor() {
        super(
            "powdered topaz",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughTopaz()),
            ],
            1,
            "grind resource"
        );
    }
}
