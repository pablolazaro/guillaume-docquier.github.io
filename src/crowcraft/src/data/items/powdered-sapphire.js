///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedGem } from "./powdered-gem";
import { RoughSapphire } from "./rough-sapphire";

export class PowderedSapphire extends PowderedGem {
    constructor() {
        super(
            "powdered sapphire",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughSapphire()),
            ],
            1,
            "grind resource"
        );
    }
}
