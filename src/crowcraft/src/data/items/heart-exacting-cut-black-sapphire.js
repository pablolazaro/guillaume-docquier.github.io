///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughBlackSapphire } from "./rough-black-sapphire";
import { WaterFlask } from "./water-flask";

export class HeartExactingCutBlackSapphire extends Item {
    constructor() {
        super(
            "heart exacting cut black sapphire",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughBlackSapphire()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: heart"
        );
    }
}
