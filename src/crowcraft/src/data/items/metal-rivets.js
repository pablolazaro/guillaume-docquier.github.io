import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Ore } from "./ore";
import { Coal } from "./coal";

export class MetalRivets extends CustomizableComponent {
    constructor() {
        super(
            "metal rivets",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(5, new Ore()),
				new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(2, new Coal()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    