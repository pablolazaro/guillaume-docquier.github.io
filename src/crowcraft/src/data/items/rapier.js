import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { BladeRivets } from "./blade-rivets";
// import { WeaponBladeThin } from "./weapon-blade-thin";
import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

export class Rapier extends Item {
    constructor() {
        super(
            "rapier",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				// new CraftingMaterial(1, new WeaponBladeThin()), // TODO Missing
				// new CraftingMaterial(1, new BladeRivets()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    