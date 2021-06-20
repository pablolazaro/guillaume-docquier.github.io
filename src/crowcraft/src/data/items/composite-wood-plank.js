import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Wood } from "./wood";
import { Sandpaper } from "./sandpaper";

export class CompositeWoodPlank extends CustomizableComponent {
    constructor() {
        super(
            "composite wood plank",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new Wood()),
				new CraftingMaterial(6, new Wood()),
				new CraftingMaterial(6, new Wood()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    