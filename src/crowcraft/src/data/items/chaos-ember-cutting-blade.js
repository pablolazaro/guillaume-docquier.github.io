///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { ChaosEmber } from "./chaos-ember";
import { CuttingGrit } from "./cutting-grit";
import { Ore } from "./ore";

export class ChaosEmberCuttingBlade extends Item {
    constructor() {
        super(
            "chaos ember cutting blade",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(3, new CuttingGrit()),
				new CraftingMaterial(1, new ChaosEmber()),
            ],
            1,
            "diamond cutting blade"
        );
    }
}
