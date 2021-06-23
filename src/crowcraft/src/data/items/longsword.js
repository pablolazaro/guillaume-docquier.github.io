import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { WeaponBladeLong } from "./weapon-blade-long";
// import { BladeRivets } from "./blade-rivets";
import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

export class Longsword extends Item {
    constructor() {
        super(
            "longsword",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				// new CraftingMaterial(1, new WeaponBladeLong()), // TODO Missing
				// new CraftingMaterial(1, new BladeRivets()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    