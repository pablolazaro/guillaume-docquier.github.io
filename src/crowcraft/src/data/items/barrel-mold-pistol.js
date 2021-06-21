import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class BarrelMoldPistol extends Item {
    constructor() {
        super(
            "barrel mold pistol",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            
        );
    }
}
    