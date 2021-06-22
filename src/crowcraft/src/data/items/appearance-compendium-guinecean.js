import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class AppearanceCompendiumGuinecean extends Item {
    constructor() {
        super(
            "appearance compendium guinecean",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(500, new Gold()),
            ],
            1
        );
    }
}
    