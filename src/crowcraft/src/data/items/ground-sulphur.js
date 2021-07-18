///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Sulphur } from "./sulphur";

export class GroundSulphur extends Item {
    constructor() {
        super(
            "ground sulphur",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Sulphur()),
            ],
            1,
            "grind resource"
        );
    }
}
