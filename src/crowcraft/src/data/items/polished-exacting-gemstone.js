///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { GroundExactingGem } from "./ground-exacting-gem";
import { PolishingPaste } from "./polishing-paste";
import { WaterFlask } from "./water-flask";

export class PolishedExactingGemstone extends Item {
    constructor() {
        super(
            "polished exacting gemstone",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new GroundExactingGem()),
				new CraftingMaterial(1, new PolishingPaste()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "polish gemstone"
        );
    }
}
