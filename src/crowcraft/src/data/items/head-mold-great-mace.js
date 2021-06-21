import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class HeadMoldGreatMace extends Item {
    constructor() {
        super(
            "head mold great mace",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            
        );
    }
}
    