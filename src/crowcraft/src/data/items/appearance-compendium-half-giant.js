import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class AppearanceCompendiumHalfGiant extends Item {
    constructor() {
        super(
            "appearance compendium half giant",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(500, new Gold()),
            ],
            1
        );
    }
}
    