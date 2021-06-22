import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class BendingFormStaffHeel extends Item {
    constructor() {
        super(
            "bending form staff heel",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            1
        );
    }
}
    