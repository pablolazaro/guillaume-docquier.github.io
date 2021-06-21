import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class WeaponWeights extends Item {
    constructor() {
        super(
            "weapon weights",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            
        );
    }
}
    