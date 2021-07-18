///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PowderedStone } from "./powdered-stone";

export class EmptyFlask extends Item {
    constructor() {
        super(
            "empty flask",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(4, new PowderedStone()),
				new CraftingMaterial(4, new PowderedStone()),
				new CraftingMaterial(4, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
