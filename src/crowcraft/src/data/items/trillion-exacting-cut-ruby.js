///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutExactingGem } from "./cut-exacting-gem";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughRuby } from "./rough-ruby";
import { WaterFlask } from "./water-flask";

export class TrillionExactingCutRuby extends CutExactingGem {
    constructor() {
        super(
            "trillion exacting cut ruby",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughRuby()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: trillion"
        );
    }
}
