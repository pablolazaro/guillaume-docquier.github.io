///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughRuby } from "./rough-ruby";
import { WaterFlask } from "./water-flask";

export class VolatileFocusGem extends Item {
    constructor() {
        super(
            "volatile focus gem",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughRuby()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: focusing"
        );
    }
}
