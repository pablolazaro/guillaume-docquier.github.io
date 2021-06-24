import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ShieldCovering } from "./shield-covering";
import { EtherealDust } from "./ethereal-dust";
import { ShieldBaseMedium } from "./shield-base-medium";
import { Enarmes } from "./enarmes";

export class MediumShield extends Item {
    constructor() {
        super(
            "medium shield",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new ShieldCovering()),
				new CraftingMaterial(1, new Enarmes()),
				new CraftingMaterial(1, new ShieldBaseMedium()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
