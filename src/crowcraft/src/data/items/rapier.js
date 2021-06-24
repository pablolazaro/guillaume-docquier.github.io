import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponHilt } from "./weapon-hilt";
import { BladeRivets } from "./blade-rivets";
import { WeaponBladeThin } from "./weapon-blade-thin";
import { EtherealDust } from "./ethereal-dust";

export class Rapier extends Item {
    constructor() {
        super(
            "rapier",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				new CraftingMaterial(1, new WeaponBladeThin()),
				new CraftingMaterial(1, new BladeRivets()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
