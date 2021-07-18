///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
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
