import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Ore } from "./ore";
import { Coal } from "./coal";

export class ArrowheadBundle extends CustomizableComponent {
    constructor() {
        super(
            "arrowhead bundle",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(1, new Coal()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    