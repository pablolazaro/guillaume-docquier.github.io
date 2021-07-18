///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class LargeCookingPot extends Item {
    constructor() {
        super(
            "large cooking pot",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(12, new Gold()),
            ],
            1,
            ""
        );
    }
}
