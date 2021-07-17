///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Wood } from "./wood";

export class WoodenBoard extends Item {
    constructor() {
        super(
            "wooden board",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(3, new Wood()),
            ],
            1,
            ""
        );
    }
}
