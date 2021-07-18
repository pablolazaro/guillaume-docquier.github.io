///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Rarities } from "models";
import { RoughGem } from "./rough-gem";

export class RoughRuby extends RoughGem {
    constructor() {
        super(
            "rough ruby",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
