///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class HotPeppers extends Item {
    constructor() {
        super(
            "hot peppers",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(30, new Gold()),
            ],
            1,
            ""
        );
    }
}
