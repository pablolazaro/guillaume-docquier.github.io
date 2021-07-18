///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { GroundHalite } from "./ground-halite";
import { RoughTopaz } from "./rough-topaz";
import { TransmutationSolution } from "./transmutation-solution";

export class RoughBlueTopaz extends Item {
    constructor() {
        super(
            "rough blue topaz",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughTopaz()),
				new CraftingMaterial(1, new TransmutationSolution()),
				new CraftingMaterial(2, new GroundHalite()),
            ],
            1,
            "transmute gemstone"
        );
    }
}
