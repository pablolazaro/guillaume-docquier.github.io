///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class WaterFlask extends Item {
    constructor() {
        super(
            "water flask",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(15, new Gold()),
            ],
            1,
            ""
        );
    }
}
