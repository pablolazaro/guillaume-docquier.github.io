///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class RawMilk extends Item {
    constructor() {
        super(
            "raw milk",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(25, new Gold()),
            ],
            1,
            ""
        );
    }
}
