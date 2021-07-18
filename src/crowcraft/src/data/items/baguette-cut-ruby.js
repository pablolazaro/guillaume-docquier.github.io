///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughRuby } from "./rough-ruby";
import { WaterFlask } from "./water-flask";

export class BaguetteCutRuby extends Item {
    constructor() {
        super(
            "baguette cut ruby",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughRuby()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: baguette"
        );
    }
}
