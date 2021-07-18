///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { GroundDolomite } from "./ground-dolomite";
import { RoughSapphire } from "./rough-sapphire";
import { TransmutationSolution } from "./transmutation-solution";

export class RoughBlackSapphire extends Item {
    constructor() {
        super(
            "rough black sapphire",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughSapphire()),
				new CraftingMaterial(1, new TransmutationSolution()),
				new CraftingMaterial(2, new GroundDolomite()),
            ],
            1,
            "transmute gemstone"
        );
    }
}
