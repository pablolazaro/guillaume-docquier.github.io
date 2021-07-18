///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedStone } from "./powdered-stone";
import { Limestone } from "./limestone";

export class PowderedLimestone extends PowderedStone {
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
