import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Ore } from "./ore";
import { Coal } from "./coal";

export class MetalBuckles extends CustomizableComponent {
    constructor() {
        super(
            "metal buckles",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(2, new Coal()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}