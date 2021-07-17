///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class SeasoningSalt extends Item {
    constructor() {
        super(
            "seasoning salt",
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
