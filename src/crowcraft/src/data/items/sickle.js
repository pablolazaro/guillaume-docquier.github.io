import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { BladeRivets } from "./blade-rivets";
// import { WeaponBladeCurved } from "./weapon-blade-curved";
import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

export class Sickle extends Item {
    constructor() {
        super(
            "sickle",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				// new CraftingMaterial(1, new WeaponBladeCurved()), // TODO Missing
				// new CraftingMaterial(1, new BladeRivets()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    