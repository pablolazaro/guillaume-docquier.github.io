import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class HeadMoldAxe extends Item {
    constructor() {
        super(
            "head mold axe",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            1
        );
    }
}
    