///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class PenAndInk extends Item {
    constructor() {
        super(
            "pen and ink",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(10, new Gold()),
            ],
            1,
            ""
        );
    }
}
