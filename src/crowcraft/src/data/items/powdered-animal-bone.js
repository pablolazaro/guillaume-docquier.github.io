///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { AnimalBone } from "./animal-bone";

export class PowderedAnimalBone extends Item {
    constructor() {
        super(
            "powdered animal bone",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new AnimalBone()),
            ],
            1,
            "grind resource"
        );
    }
}
