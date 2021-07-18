///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { StitchedLeather } from "./stitched-leather";

export class BowString extends Item {
    constructor() {
        super(
            "bow string",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new StitchedLeather()),
				new CraftingMaterial(1, new StitchedLeather()),
            ],
            1,
            ""
        );
    }
}
