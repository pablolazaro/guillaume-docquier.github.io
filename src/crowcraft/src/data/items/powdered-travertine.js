///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Travertine } from "./travertine";

export class PowderedTravertine extends Item {
    constructor() {
        super(
            "powdered travertine",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Travertine()),
            ],
            1,
            "grind resource"
        );
    }
}
