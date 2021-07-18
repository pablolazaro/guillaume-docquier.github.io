///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { PhilosophersSolution } from "./philosophers-solution";
import { TransmutationSolution } from "./transmutation-solution";

export class PhilosophersStone extends Item {
    constructor() {
        super(
            "philosopher's stone",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new PhilosophersSolution()),
				new CraftingMaterial(1, new TransmutationSolution()),
            ],
            1,
            ""
        );
    }
}
