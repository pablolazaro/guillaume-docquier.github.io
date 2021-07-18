///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedStone } from "./powdered-stone";
import { Marble } from "./marble";

export class PowderedMarble extends PowderedStone {
    constructor() {
        super(
            "powdered marble",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Marble()),
            ],
            1,
            "grind resource"
        );
    }
}
