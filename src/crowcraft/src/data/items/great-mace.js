import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { WeaponHeadGreatMace } from "./weapon-head-great-mace";
import { WeaponShaftMedium } from "./weapon-shaft-medium";
import { WeaponHiltGreat } from "./weapon-hilt-great";
import { EtherealDust } from "./ethereal-dust";

export class GreatMace extends Item {
    constructor() {
        super(
            "great mace",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHiltGreat()),
				// new CraftingMaterial(1, new WeaponHeadGreatMace()), // TODO Missing
				new CraftingMaterial(1, new WeaponShaftMedium()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
    