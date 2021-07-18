///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GenericMaterial } from "models";
import { Mineral } from "./mineral";

export class GroundMineral extends GenericMaterial {
    constructor() {
        super(
            "ground mineral",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Mineral()),
            ],
            1,
            "grind resource"
        );
    }
}
