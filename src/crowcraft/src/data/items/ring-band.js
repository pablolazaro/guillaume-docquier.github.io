///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ore } from "./ore";
import { RingSetting } from "./ring-setting";

export class RingBand extends Item {
    constructor() {
        super(
            "ring band",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(4, new Ore()),
				new CraftingMaterial(8, new Ore()),
				new CraftingMaterial(8, new Ore()),
				new CraftingMaterial(1, new RingSetting()),
            ],
            1,
            ""
        );
    }
}
