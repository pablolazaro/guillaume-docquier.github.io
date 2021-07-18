///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Wood } from "./wood";

export class ParchmentPaper extends Item {
    constructor() {
        super(
            "parchment paper",
            [Professions.Woodworker],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new Wood()),
            ],
            1,
            ""
        );
    }
}
