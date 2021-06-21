import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class Adhesive extends Item {
    constructor() {
        super(
            "adhesive",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(250, new Gold()),
            ],
            
        );
    }
}
    