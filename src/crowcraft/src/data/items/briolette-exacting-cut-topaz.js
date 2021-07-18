///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughTopaz } from "./rough-topaz";
import { WaterFlask } from "./water-flask";

export class BrioletteExactingCutTopaz extends Item {
    constructor() {
        super(
            "briolette exacting cut topaz",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughTopaz()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: briolette"
        );
    }
}
