///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, CraftingMaterial, Rarities, Professions } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughGem } from "./rough-gem";
import { WaterFlask } from "./water-flask";

export class CutGem extends GenericMaterial {
    constructor(
        name = "cut gem",
        professions = [Professions.Jewelcrafter],
        rarities = [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [
            new CraftingMaterial(1, new RoughGem()),
			new CraftingMaterial(1, new DiamondCuttingBlade()),
			new CraftingMaterial(1, new WaterFlask()),
        ],
        craftingQuantity = 1,
        craftingName = ""
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity, craftingName);
    }
}
