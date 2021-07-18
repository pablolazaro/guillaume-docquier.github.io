///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedGem } from "./powdered-gem";
import { RoughTopaz } from "./rough-topaz";

export class PowderedTopaz extends PowderedGem {
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
