///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { RoughRuby } from "./rough-ruby";

export class PowderedRuby extends Item {
    constructor() {
        super(
            "powdered ruby",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughRuby()),
            ],
            1,
            "grind resource"
        );
    }
}
