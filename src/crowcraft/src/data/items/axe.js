import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponHilt } from "./weapon-hilt";
import { WeaponHeadAxe } from "./weapon-head-axe";
import { EtherealDust } from "./ethereal-dust";
import { WeaponShaftShort } from "./weapon-shaft-short";

export class Axe extends Item {
    constructor() {
        super(
            "axe",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				new CraftingMaterial(1, new WeaponHeadAxe()),
				new CraftingMaterial(1, new WeaponShaftShort()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
