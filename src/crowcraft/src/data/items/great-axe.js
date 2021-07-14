import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { WeaponHeadGreatAxe } from "./weapon-head-great-axe";
import { WeaponHiltGreat } from "./weapon-hilt-great";
import { WeaponShaftMedium } from "./weapon-shaft-medium";

export class GreatAxe extends Item {
    constructor() {
        super(
            "great axe",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHiltGreat()),
				new CraftingMaterial(1, new WeaponHeadGreatAxe()),
				new CraftingMaterial(1, new WeaponShaftMedium()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
