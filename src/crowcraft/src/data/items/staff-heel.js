///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BendingFormStaffHeel } from "./bending-form-staff-heel";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { EtherealDust } from "./ethereal-dust";

export class StaffHeel extends Item {
    constructor() {
        super(
            "staff heel",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(8, new EtherealDust()),
				new CraftingMaterial(1, new BendingFormStaffHeel()),
            ],
            1,
            ""
        );
    }
}
