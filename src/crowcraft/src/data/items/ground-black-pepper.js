///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class GroundBlackPepper extends Item {
    constructor() {
        super(
            "ground black pepper",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(10, new Gold()),
            ],
            1,
            ""
        );
    }
}
