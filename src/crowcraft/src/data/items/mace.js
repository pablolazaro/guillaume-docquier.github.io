import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { WeaponHeadMace } from "./weapon-head-mace";
// import { WeaponShaftShort } from "./weapon-shaft-short";
// import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

export class Mace extends Item {
    constructor() {
        super(
            "mace",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new WeaponHilt()), // TODO Missing
				// new CraftingMaterial(1, new WeaponHeadMace()), // TODO Missing
				// new CraftingMaterial(1, new WeaponShaftShort()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    