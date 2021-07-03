import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { WeaponHilt } from "./weapon-hilt";
import { WeaponBladeCurved } from "./weapon-blade-curved";
import { BladeRivets } from "./blade-rivets";

export class Sickle extends Item {
    constructor() {
        super(
            "sickle",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				new CraftingMaterial(1, new WeaponBladeCurved()),
				new CraftingMaterial(1, new BladeRivets()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
