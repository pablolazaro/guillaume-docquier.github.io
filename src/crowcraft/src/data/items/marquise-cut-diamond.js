///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutGem } from "./cut-gem";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughDiamond } from "./rough-diamond";
import { WaterFlask } from "./water-flask";

export class MarquiseCutDiamond extends CutGem {
    constructor() {
        super(
            "marquise cut diamond",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughDiamond()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: marquise"
        );
    }
}
