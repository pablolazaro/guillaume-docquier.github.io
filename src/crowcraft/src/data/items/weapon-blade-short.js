///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BladeMoldShort } from "./blade-mold-short";
import { EtherealDust } from "./ethereal-dust";
import { MetalBar } from "./metal-bar";

export class WeaponBladeShort extends Item {
    constructor() {
        super(
            "weapon blade: short",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(4, new EtherealDust()),
				new CraftingMaterial(1, new BladeMoldShort()),
            ],
            1,
            ""
        );
    }
}
