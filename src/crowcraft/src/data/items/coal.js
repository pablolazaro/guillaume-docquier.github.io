///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Wood } from "./wood";

export class Coal extends Item {
    constructor() {
        super(
            "coal",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(3, new EtherealDust()),
            ],
            5,
            ""
        );
    }
}
