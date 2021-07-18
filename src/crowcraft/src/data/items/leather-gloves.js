///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { LeatherSquare } from "./leather-square";
import { MetalRivets } from "./metal-rivets";

export class LeatherGloves extends Item {
    constructor() {
        super(
            "leather gloves",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new MetalRivets()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
