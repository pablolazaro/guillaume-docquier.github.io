///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Beeswax } from "./beeswax";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { WaterFlask } from "./water-flask";

export class PotionOfHarvestBeeswax extends Item {
    constructor() {
        super(
            "potion of harvest: beeswax",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(6, new Beeswax()),
            ],
            1,
            ""
        );
    }
}
