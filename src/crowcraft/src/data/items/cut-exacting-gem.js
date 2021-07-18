///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughGem } from "./rough-gem";
import { WaterFlask } from "./water-flask";

export class CutExactingGem extends Item {
    constructor() {
        super(
            "cut exacting gem",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughGem()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
