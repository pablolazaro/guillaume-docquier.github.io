///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { PowderedGem } from "./powdered-gem";
import { RoughEmerald } from "./rough-emerald";

export class PowderedEmerald extends PowderedGem {
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
