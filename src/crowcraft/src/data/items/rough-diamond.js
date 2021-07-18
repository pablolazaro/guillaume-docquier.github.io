///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Rarities } from "models";
import { RoughGem } from "./rough-gem";

export class RoughDiamond extends RoughGem {
    constructor() {
        super(
            "rough diamond",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
