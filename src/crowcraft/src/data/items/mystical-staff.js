import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { LimbsStaff } from "./limbs-staff";
import { EtherealDust } from "./ethereal-dust";
import { StaffHeel } from "./staff-heel";
import { StaffHead } from "./staff-head";

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
    