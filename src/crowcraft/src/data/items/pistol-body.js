import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { PistolTrigger } from "./pistol-trigger";
import { PistolHammerAndFrizzen } from "./pistol-hammer-and-frizzen";
import { WeaponGrip } from "./weapon-grip";

export class PistolBody extends Item {
    constructor() {
        super(
            "pistol body",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new PistolHammerAndFrizzen()),
				new CraftingMaterial(1, new PistolTrigger()),
            ],
            1
        );
    }
}
