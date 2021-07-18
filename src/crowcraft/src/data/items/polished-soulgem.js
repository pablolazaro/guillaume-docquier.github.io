///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { PolishingPaste } from "./polishing-paste";
import { RoughSoulgem } from "./rough-soulgem";
import { WaterFlask } from "./water-flask";

export class PolishedSoulgem extends Item {
    constructor() {
        super(
            "polished soulgem",
            [Professions.Jewelcrafter],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new RoughSoulgem()),
				new CraftingMaterial(1, new PolishingPaste()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "polish soulgem"
        );
    }
}
