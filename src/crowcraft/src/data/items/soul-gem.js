///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { RawMaterial, Rarities } from "models";

export class SoulGem extends RawMaterial {
    constructor(
        name = "soul gem",
        professions = [],
        rarities = [Rarities.Common],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
