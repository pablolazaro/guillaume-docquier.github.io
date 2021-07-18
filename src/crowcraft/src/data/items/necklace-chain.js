///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { NecklaceBail } from "./necklace-bail";
import { Ore } from "./ore";

export class NecklaceChain extends Item {
    constructor() {
        super(
            "necklace chain",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(4, new Ore()),
				new CraftingMaterial(8, new Ore()),
				new CraftingMaterial(8, new Ore()),
				new CraftingMaterial(1, new NecklaceBail()),
            ],
            1,
            ""
        );
    }
}
