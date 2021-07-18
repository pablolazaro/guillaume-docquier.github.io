///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { GroundGem } from "./ground-gem";
import { PolishingPaste } from "./polishing-paste";
import { WaterFlask } from "./water-flask";

export class PolishedGemstone extends Item {
    constructor() {
        super(
            "polished gemstone",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new GroundGem()),
				new CraftingMaterial(1, new PolishingPaste()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "polish gemstone"
        );
    }
}
