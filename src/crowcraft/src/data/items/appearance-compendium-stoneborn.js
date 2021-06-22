import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class AppearanceCompendiumStoneborn extends Item {
    constructor() {
        super(
            "appearance compendium stoneborn",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(500, new Gold()),
            ],
            1
        );
    }
}
    