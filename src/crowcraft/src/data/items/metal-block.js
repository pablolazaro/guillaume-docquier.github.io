///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ore } from "./ore";

export class MetalBlock extends Item {
    constructor() {
        super(
            "metal block",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(3, new Ore()),
            ],
            1,
            ""
        );
    }
}
