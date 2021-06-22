import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class BendingFormSpellboundBow extends Item {
    constructor() {
        super(
            "bending form spellbound bow",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            1
        );
    }
}
    