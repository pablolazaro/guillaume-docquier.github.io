///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { GenericMaterial, Rarities } from "models";

export class ScavengedIngredient extends GenericMaterial {
    constructor(
        name = "scavenged ingredient",
        professions = [],
        rarities = [Rarities.Common],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
