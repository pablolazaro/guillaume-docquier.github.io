///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughSapphire } from "./rough-sapphire";
import { WaterFlask } from "./water-flask";

export class TrillionExactingCutSapphire extends Item {
    constructor() {
        super(
            "trillion exacting cut sapphire",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughSapphire()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: trillion"
        );
    }
}
