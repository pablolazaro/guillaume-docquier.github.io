import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalScales } from "./metal-scales";
import { EtherealDust } from "./ethereal-dust";
import { LeatherPadding } from "./leather-padding";

export class MailBoots extends Item {
    constructor() {
        super(
            "mail boots",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new LeatherPadding()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
