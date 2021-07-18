///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { AnimalBlood } from "./animal-blood";
import { ChaosEmber } from "./chaos-ember";
import { EmptyFlask } from "./empty-flask";
import { PowderedAnimalBone } from "./powdered-animal-bone";

export class PotionOfExchange extends Item {
    constructor() {
        super(
            "potion of exchange",
            [Professions.Alchemist],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(1, new AnimalBlood()),
				new CraftingMaterial(5, new ChaosEmber()),
				new CraftingMaterial(6, new PowderedAnimalBone()),
            ],
            1,
            ""
        );
    }
}
