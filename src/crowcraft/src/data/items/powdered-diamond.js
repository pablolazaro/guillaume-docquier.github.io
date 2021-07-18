///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { RoughDiamond } from "./rough-diamond";

export class PowderedDiamond extends Item {
    constructor() {
        super(
            "powdered diamond",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughDiamond()),
            ],
            1,
            "grind resource"
        );
    }
}
