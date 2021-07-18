///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GenericMaterial } from "models";
import { Stone } from "./stone";

export class PowderedStone extends GenericMaterial {
    constructor() {
        super(
            "powdered stone",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Stone()),
            ],
            1,
            "grind resource"
        );
    }
}
