import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalScales } from "./metal-scales";
import { EtherealDust } from "./ethereal-dust";
import { LeatherPadding } from "./leather-padding";

export class MailCoif extends Item {
    constructor() {
        super(
            "mail coif",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new LeatherPadding()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
