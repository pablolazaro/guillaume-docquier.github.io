///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Hide } from "./hide";

export class LeatherSheet extends Item {
    constructor() {
        super(
            "leather sheet",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new Hide()),
				new CraftingMaterial(2, new Hide()),
				new CraftingMaterial(2, new Hide()),
            ],
            1,
            ""
        );
    }
}
