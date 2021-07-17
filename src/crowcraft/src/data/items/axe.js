///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { WeaponHeadAxe } from "./weapon-head-axe";
import { WeaponHilt } from "./weapon-hilt";
import { WeaponShaftShort } from "./weapon-shaft-short";

export class Axe extends Item {
    constructor() {
        super(
            "axe",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				new CraftingMaterial(1, new WeaponHeadAxe()),
				new CraftingMaterial(1, new WeaponShaftShort()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
