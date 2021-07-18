///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { WaterFlask } from "./water-flask";
import { Wood } from "./wood";

export class PotionOfHarvestLogging extends Item {
    constructor() {
        super(
            "potion of harvest: logging",
            [Professions.Alchemist],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(8, new Wood()),
            ],
            1,
            ""
        );
    }
}
