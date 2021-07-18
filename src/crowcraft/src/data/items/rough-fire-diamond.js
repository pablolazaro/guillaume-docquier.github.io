///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { RoughGem } from "./rough-gem";
import { GroundSulphur } from "./ground-sulphur";
import { RoughRuby } from "./rough-ruby";
import { TransmutationSolution } from "./transmutation-solution";

export class RoughFireDiamond extends RoughGem {
    constructor() {
        super(
            "rough fire diamond",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughRuby()),
				new CraftingMaterial(1, new TransmutationSolution()),
				new CraftingMaterial(2, new GroundSulphur()),
            ],
            1,
            "transmute gemstone"
        );
    }
}
