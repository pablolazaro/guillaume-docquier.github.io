///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GroundMineral } from "./ground-mineral";
import { Nitre } from "./nitre";

export class GroundNitre extends GroundMineral {
    constructor() {
        super(
            "ground nitre",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Nitre()),
            ],
            1,
            "grind resource"
        );
    }
}
