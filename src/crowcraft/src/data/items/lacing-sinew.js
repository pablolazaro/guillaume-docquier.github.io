///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Meat } from "./meat";

export class LacingSinew extends Item {
    constructor() {
        super(
            "lacing sinew",
            [Professions.Leatherworker],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new Meat()),
				new CraftingMaterial(3, new EtherealDust()),
            ],
            5,
            ""
        );
    }
}
