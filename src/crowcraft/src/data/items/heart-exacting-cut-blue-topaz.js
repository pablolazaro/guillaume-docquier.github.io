///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutExactingGem } from "./cut-exacting-gem";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughBlueTopaz } from "./rough-blue-topaz";
import { WaterFlask } from "./water-flask";

export class HeartExactingCutBlueTopaz extends CutExactingGem {
    constructor() {
        super(
            "heart exacting cut blue topaz",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughBlueTopaz()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: heart"
        );
    }
}
