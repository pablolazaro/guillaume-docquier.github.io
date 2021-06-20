import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { AppearanceCompendium } from "./appearance-compendium";
// import { WeaponMold } from "./weapon-mold";

export class ModifyWeaponMold extends Item {
    constructor() {
        super(
            "modify weapon mold",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common],
            [
                // new CraftingMaterial(1, new WeaponMold()), // TODO Missing
				// new CraftingMaterial(1, new AppearanceCompendium()), // TODO Missing
            ],
            1
        );
    }
}
    