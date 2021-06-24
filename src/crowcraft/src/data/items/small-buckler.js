import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ShieldCovering } from "./shield-covering";
import { EtherealDust } from "./ethereal-dust";
import { Enarmes } from "./enarmes";
import { ShieldBaseSmall } from "./shield-base-small";

export class SmallBuckler extends Item {
    constructor() {
        super(
            "small buckler",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new ShieldCovering()),
				new CraftingMaterial(1, new Enarmes()),
				new CraftingMaterial(1, new ShieldBaseSmall()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
