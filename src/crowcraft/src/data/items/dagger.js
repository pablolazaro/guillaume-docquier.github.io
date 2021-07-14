import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BladeRivets } from "./blade-rivets";
import { EtherealDust } from "./ethereal-dust";
import { WeaponBladeShort } from "./weapon-blade-short";
import { WeaponHilt } from "./weapon-hilt";

export class Dagger extends Item {
    constructor() {
        super(
            "dagger",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				new CraftingMaterial(1, new WeaponBladeShort()),
				new CraftingMaterial(1, new BladeRivets()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
