import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class BottledSteam extends Item {
    constructor() {
        super(
            "bottled steam",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(2000, new Gold()),
            ],
            1
        );
    }
}
