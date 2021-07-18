///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutGem } from "./cut-gem";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughTopaz } from "./rough-topaz";
import { WaterFlask } from "./water-flask";

export class TriangleCutTopaz extends CutGem {
    constructor() {
        super(
            "triangle cut topaz",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughTopaz()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: triangle"
        );
    }
}
