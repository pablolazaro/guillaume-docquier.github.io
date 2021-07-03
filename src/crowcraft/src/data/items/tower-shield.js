import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Enarmes } from "./enarmes";
import { ShieldCovering } from "./shield-covering";
import { ShieldBaseLarge } from "./shield-base-large";

export class TowerShield extends Item {
    constructor() {
        super(
            "tower shield",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new ShieldCovering()),
				new CraftingMaterial(1, new Enarmes()),
				new CraftingMaterial(1, new ShieldBaseLarge()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
