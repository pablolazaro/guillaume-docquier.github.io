import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponShaftShort } from "./weapon-shaft-short";
import { EtherealDust } from "./ethereal-dust";
import { WeaponHilt } from "./weapon-hilt";
import { WeaponHeadHammer } from "./weapon-head-hammer";

export class MysticalThrowingHammer extends Item {
    constructor() {
        super(
            "mystical throwing hammer",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHilt()),
				new CraftingMaterial(1, new WeaponHeadHammer()),
				new CraftingMaterial(1, new WeaponShaftShort()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
