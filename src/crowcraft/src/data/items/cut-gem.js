///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughGem } from "./rough-gem";
import { WaterFlask } from "./water-flask";

export class CutGem extends Item {
    constructor() {
        super(
            "cut gem",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughGem()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
