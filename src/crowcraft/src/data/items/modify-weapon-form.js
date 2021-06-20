import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { AppearanceCompendium } from "./appearance-compendium";
// import { WeaponForm } from "./weapon-form";

export class ModifyWeaponForm extends Item {
    constructor() {
        super(
            "modify weapon form",
            [Professions.Woodworker],
            [Rarities.Common],
            [
                // new CraftingMaterial(1, new WeaponForm()), // TODO Missing
				// new CraftingMaterial(1, new AppearanceCompendium()), // TODO Missing
            ],
            1
        );
    }
}
    