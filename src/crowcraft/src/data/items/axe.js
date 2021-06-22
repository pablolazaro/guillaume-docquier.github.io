import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponShaftShort } from "./weapon-shaft-short";
import { WeaponHeadAxe } from "./weapon-head-axe";
import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

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
    