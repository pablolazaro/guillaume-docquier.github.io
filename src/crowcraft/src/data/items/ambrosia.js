///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Apple } from "./apple";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { GroundCinnabar } from "./ground-cinnabar";
import { GroundHalite } from "./ground-halite";
import { WaterFlask } from "./water-flask";

export class Ambrosia extends Item {
    constructor() {
        super(
            "ambrosia",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(3, new GroundCinnabar()),
				new CraftingMaterial(3, new WaterFlask()),
				new CraftingMaterial(3, new GroundHalite()),
				new CraftingMaterial(3, new Apple()),
				new CraftingMaterial(12, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
