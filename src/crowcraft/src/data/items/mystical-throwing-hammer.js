import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { WeaponShaftShort } from "./weapon-shaft-short";
// import { WeaponHeadHammer } from "./weapon-head-hammer";
// import { WeaponHilt } from "./weapon-hilt";
import { EtherealDust } from "./ethereal-dust";

export class MysticalThrowingHammer extends Item {
    constructor() {
        super(
            "mystical throwing hammer",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new WeaponHilt()), // TODO Missing
				// new CraftingMaterial(1, new WeaponHeadHammer()), // TODO Missing
				// new CraftingMaterial(1, new WeaponShaftShort()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    