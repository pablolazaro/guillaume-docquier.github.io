///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { Hide } from "./hide";
import { WaterFlask } from "./water-flask";

export class PotionOfHarvestSkinning extends Item {
    constructor() {
        super(
            "potion of harvest: skinning",
            [Professions.Alchemist],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(8, new Hide()),
            ],
            1,
            ""
        );
    }
}
