///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class Carrot extends Item {
    constructor() {
        super(
            "carrot",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(50, new Gold()),
            ],
            1,
            ""
        );
    }
}
