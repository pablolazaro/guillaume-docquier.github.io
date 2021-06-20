import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Hide } from "./hide";

export class LeatherSheet extends CustomizableComponent {
    constructor() {
        super(
            "leather sheet",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new Hide()),
				new CraftingMaterial(2, new Hide()),
				new CraftingMaterial(2, new Hide()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    