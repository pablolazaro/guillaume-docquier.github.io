import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { LeatherPadding } from "./leather-padding";
import { MetalRings } from "./metal-rings";
import { EtherealDust } from "./ethereal-dust";

export class MailHauberk extends Item {
    constructor() {
        super(
            "mail hauberk",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalRings()),
				new CraftingMaterial(1, new MetalRings()),
				new CraftingMaterial(1, new MetalRings()),
				new CraftingMaterial(1, new LeatherPadding()),
				new CraftingMaterial(18, new EtherealDust()),
            ],
            1
        );
    }
}
    