import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class AppearanceCompendiumElken extends Item {
    constructor() {
        super(
            "appearance compendium elken",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(500, new Gold()),
            ],
            1
        );
    }
}
    