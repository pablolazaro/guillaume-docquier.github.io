///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, CraftingMaterial, Rarities, Professions } from "models";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughGem } from "./rough-gem";
import { WaterFlask } from "./water-flask";

export class CutExactingGem extends GenericMaterial {
    constructor(
        name = "cut exacting gem",
        professions = [Professions.Jewelcrafter],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [
            new CraftingMaterial(1, new RoughGem()),
			new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
			new CraftingMaterial(1, new WaterFlask()),
        ],
        craftingQuantity = 1,
        craftingName = ""
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName);
    }
}
