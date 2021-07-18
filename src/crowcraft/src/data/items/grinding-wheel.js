///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Stone } from "./stone";

export class GrindingWheel extends Item {
    constructor() {
        super(
            "grinding wheel",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(8, new Stone()),
				new CraftingMaterial(8, new Stone()),
				new CraftingMaterial(8, new Stone()),
            ],
            1,
            ""
        );
    }
}
