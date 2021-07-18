///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedGem } from "./powdered-gem";
import { RoughDiamond } from "./rough-diamond";

export class PowderedDiamond extends PowderedGem {
    constructor() {
        super(
            "powdered diamond",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughDiamond()),
            ],
            1,
            "grind resource"
        );
    }
}
