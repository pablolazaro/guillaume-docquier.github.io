///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CuttingGrit } from "./cutting-grit";
import { Ore } from "./ore";

export class DiamondCuttingBlade extends Item {
    constructor() {
        super(
            "diamond cutting blade",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(3, new CuttingGrit()),
            ],
            1,
            ""
        );
    }
}
