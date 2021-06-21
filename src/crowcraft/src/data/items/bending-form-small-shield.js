import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class BendingFormSmallShield extends Item {
    constructor() {
        super(
            "bending form small shield",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            
        );
    }
}
    