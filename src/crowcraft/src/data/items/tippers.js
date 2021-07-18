///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class Tippers extends Item {
    constructor() {
        super(
            "tippers",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            1,
            ""
        );
    }
}
