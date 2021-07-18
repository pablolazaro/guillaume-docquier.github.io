///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class Potato extends Item {
    constructor() {
        super(
            "potato",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(20, new Gold()),
            ],
            1,
            ""
        );
    }
}
