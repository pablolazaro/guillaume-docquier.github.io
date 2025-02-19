///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
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
