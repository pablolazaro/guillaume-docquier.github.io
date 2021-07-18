///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { PistolHammerAndFrizzen } from "./pistol-hammer-and-frizzen";
import { PistolTrigger } from "./pistol-trigger";
import { WeaponGrip } from "./weapon-grip";

export class PistolBody extends Item {
    constructor() {
        super(
            "pistol body",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new PistolHammerAndFrizzen()),
				new CraftingMaterial(1, new PistolTrigger()),
            ],
            1,
            ""
        );
    }
}
