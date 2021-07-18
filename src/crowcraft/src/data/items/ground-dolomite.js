///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Dolomite } from "./dolomite";

export class GroundDolomite extends Item {
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
