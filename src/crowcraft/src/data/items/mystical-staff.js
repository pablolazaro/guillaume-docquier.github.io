///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { LimbsStaff } from "./limbs-staff";
import { StaffHead } from "./staff-head";
import { StaffHeel } from "./staff-heel";

export class MysticalStaff extends Item {
    constructor() {
        super(
            "mystical staff",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LimbsStaff()),
				new CraftingMaterial(1, new StaffHead()),
				new CraftingMaterial(1, new StaffHeel()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
