import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { WeaponShaftShort } from "./weapon-shaft-short";
// import { WeaponHeadAxe } from "./weapon-head-axe";
// import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

// TODO Missing 1-hand components
export class Axe extends Item {
    constructor() {
        super(
            "axe",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new WeaponHilt()), // TODO Missing
				// new CraftingMaterial(1, new WeaponHeadAxe()), // TODO Missing
				// new CraftingMaterial(1, new WeaponShaftShort()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    