///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { RoughSapphire } from "./rough-sapphire";

export class PowderedSapphire extends Item {
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
