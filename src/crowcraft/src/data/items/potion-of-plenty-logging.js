///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { WaterFlask } from "./water-flask";
import { Wood } from "./wood";

export class PotionOfPlentyLogging extends Item {
    constructor() {
        super(
            "potion of plenty: logging",
            [Professions.Alchemist],
            [Rarities.Common],
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
