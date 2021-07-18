///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughDiamond } from "./rough-diamond";
import { WaterFlask } from "./water-flask";

export class RoundCutDiamond extends Item {
    constructor() {
        super(
            "round cut diamond",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughDiamond()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: round"
        );
    }
}
