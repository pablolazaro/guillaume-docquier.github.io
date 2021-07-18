///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughEmerald } from "./rough-emerald";
import { WaterFlask } from "./water-flask";

export class MarquiseCutEmerald extends Item {
    constructor() {
        super(
            "marquise cut emerald",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughEmerald()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: marquise"
        );
    }
}
