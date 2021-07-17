///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class CoffeeBeans extends Item {
    constructor() {
        super(
            "coffee beans",
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
