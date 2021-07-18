///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GroundMineral } from "./ground-mineral";
import { Halite } from "./halite";

export class GroundHalite extends GroundMineral {
    constructor() {
        super(
            "ground halite",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Halite()),
            ],
            1,
            "grind resource"
        );
    }
}
