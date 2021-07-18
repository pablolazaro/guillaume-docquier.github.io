///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GroundMineral } from "./ground-mineral";
import { Cinnabar } from "./cinnabar";

export class GroundCinnabar extends GroundMineral {
    constructor() {
        super(
            "ground cinnabar",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Cinnabar()),
            ],
            1,
            "grind resource"
        );
    }
}
