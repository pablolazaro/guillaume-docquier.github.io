///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GenericMaterial } from "models";
import { RoughGem } from "./rough-gem";

export class PowderedGem extends GenericMaterial {
    constructor() {
        super(
            "powdered gem",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughGem()),
            ],
            1,
            "grind resource"
        );
    }
}
