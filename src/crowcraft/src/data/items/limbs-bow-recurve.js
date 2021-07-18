///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BendingFormCompoundBow } from "./bending-form-compound-bow";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { EtherealDust } from "./ethereal-dust";

export class LimbsBowRecurve extends Item {
    constructor() {
        super(
            "limbs: bow recurve",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(8, new EtherealDust()),
				new CraftingMaterial(1, new BendingFormCompoundBow()),
            ],
            1,
            ""
        );
    }
}
