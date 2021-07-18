///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GroundMineral } from "./ground-mineral";
import { Dolomite } from "./dolomite";

export class GroundDolomite extends GroundMineral {
    constructor() {
        super(
            "ground dolomite",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Dolomite()),
            ],
            1,
            "grind resource"
        );
    }
}
