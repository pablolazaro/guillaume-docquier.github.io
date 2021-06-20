import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { BladeRivets } from "./blade-rivets";
// import { WeaponBladeShort } from "./weapon-blade-short";
// import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

export class Dagger extends Item {
    constructor() {
        super(
            "dagger",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new WeaponHilt()), // TODO Missing
				// new CraftingMaterial(1, new WeaponBladeShort()), // TODO Missing
				// new CraftingMaterial(1, new BladeRivets()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    