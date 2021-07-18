///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { GroundMineral } from "./ground-mineral";
import { PowderedStone } from "./powdered-stone";
import { WaterFlask } from "./water-flask";

export class TransmutationSolution extends Item {
    constructor() {
        super(
            "transmutation solution",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(2, new PowderedStone()),
				new CraftingMaterial(3, new EtherealDust()),
				new CraftingMaterial(2, new GroundMineral()),
            ],
            1,
            ""
        );
    }
}
