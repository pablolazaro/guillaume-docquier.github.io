import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Iron } from "./iron";
import { Ore } from "./ore";
import { Coal } from "./coal";

export class MetalSheet extends CustomizableComponent {
    constructor() {
        super(
            "metal sheet",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Ore()),
				new CraftingMaterial(20, new Ore()),
				new CraftingMaterial(12, new Coal()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    