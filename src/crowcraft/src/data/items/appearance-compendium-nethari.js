import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class AppearanceCompendiumNethari extends Item {
    constructor() {
        super(
            "appearance compendium nethari",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(500, new Gold()),
            ],
            1
        );
    }
}
    