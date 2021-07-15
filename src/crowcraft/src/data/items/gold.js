///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { RawMaterial, Rarities } from "models";

export class Gold extends RawMaterial {
    constructor(
        name = "gold",
        professions = [],
        rarities = [Rarities.Common],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
