///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalSection } from "./metal-section";

export class ShieldCovering extends Item {
    constructor() {
        super(
            "shield covering",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalSection()),
				new CraftingMaterial(1, new MetalSection()),
            ],
            1
        );
    }
}
