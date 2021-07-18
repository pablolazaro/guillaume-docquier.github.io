///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
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
