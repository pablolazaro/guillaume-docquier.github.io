///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class CookingFoil extends Item {
    constructor() {
        super(
            "cooking foil",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(6, new Gold()),
            ],
            1,
            ""
        );
    }
}
