///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { PolishedGemstone } from "./polished-gemstone";
import { RingBand } from "./ring-band";

export class Ring extends Item {
    constructor() {
        super(
            "ring",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new PolishedGemstone()),
				new CraftingMaterial(1, new RingBand()),
            ],
            1,
            ""
        );
    }
}
