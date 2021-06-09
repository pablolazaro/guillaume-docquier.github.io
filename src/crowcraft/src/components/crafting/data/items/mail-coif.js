import { Item, CraftingMaterial, Rarities, Professions } from "../item";
import { MetalScales } from "./metal-scales";
import { LeatherPadding } from "./leather-padding";
import { EtherealDust } from "./ethereal-dust";

export class MailCoif extends Item {
    static id = "mailCoif";

    constructor() {
        super(
            MailCoif.id,
            "mail coif",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalScales()),
                new CraftingMaterial(1, new MetalScales()),
                new CraftingMaterial(1, new MetalScales()),
                new CraftingMaterial(1, new LeatherPadding()),
                new CraftingMaterial(6, new EtherealDust())
            ],
            1
        );
    }
}