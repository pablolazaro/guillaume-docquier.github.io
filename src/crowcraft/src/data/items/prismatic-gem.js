///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { GroundNitre } from "./ground-nitre";
import { RoughGem } from "./rough-gem";
import { TransmutationSolution } from "./transmutation-solution";

export class PrismaticGem extends Item {
    constructor() {
        super(
            "prismatic gem",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughGem()),
				new CraftingMaterial(1, new TransmutationSolution()),
				new CraftingMaterial(2, new GroundNitre()),
            ],
            1,
            "transmute gemstone"
        );
    }
}
