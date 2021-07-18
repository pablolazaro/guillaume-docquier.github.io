///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { NecklaceChain } from "./necklace-chain";
import { PolishedExactingGemstone } from "./polished-exacting-gemstone";

export class Necklace extends Item {
    constructor() {
        super(
            "necklace",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new PolishedExactingGemstone()),
				new CraftingMaterial(1, new NecklaceChain()),
            ],
            1,
            ""
        );
    }
}
