///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CuttingGrit } from "./cutting-grit";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { WaterFlask } from "./water-flask";

export class PotionOfHarvestCuttingGrit extends Item {
    constructor() {
        super(
            "potion of harvest: cutting grit",
            [Professions.Alchemist],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(6, new CuttingGrit()),
            ],
            1,
            ""
        );
    }
}
