///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AnimalBlood } from "./animal-blood";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { PowderedAnimalBone } from "./powdered-animal-bone";

export class PotionOfSapho extends Item {
    constructor() {
        super(
            "potion of sapho",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new AnimalBlood()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(6, new PowderedAnimalBone()),
            ],
            1,
            ""
        );
    }
}
