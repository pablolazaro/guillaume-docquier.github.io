///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BladeMoldGreatSword } from "./blade-mold-great-sword";
import { EtherealDust } from "./ethereal-dust";
import { MetalBar } from "./metal-bar";

export class WeaponBladeGreat extends Item {
    constructor() {
        super(
            "weapon blade: great",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new BladeMoldGreatSword()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
