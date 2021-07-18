///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedGem } from "./powdered-gem";
import { RoughRuby } from "./rough-ruby";

export class PowderedRuby extends PowderedGem {
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
