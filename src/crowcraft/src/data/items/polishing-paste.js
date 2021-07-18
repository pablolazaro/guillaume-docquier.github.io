///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { PowderedStone } from "./powdered-stone";
import { WaterFlask } from "./water-flask";

export class PolishingPaste extends Item {
    constructor() {
        super(
            "polishing paste",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(16, new PowderedStone()),
				new CraftingMaterial(3, new WaterFlask()),
            ],
            1,
            ""
        );
    }
}
