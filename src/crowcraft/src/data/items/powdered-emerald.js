///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { RoughEmerald } from "./rough-emerald";

export class PowderedEmerald extends Item {
    constructor() {
        super(
            "powdered emerald",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughEmerald()),
            ],
            1,
            "grind resource"
        );
    }
}
