import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Hide } from "./hide";

export class LeatherSquare extends CustomizableComponent {
    constructor() {
        super(
            "leather square",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(4, new Hide()),
				new CraftingMaterial(3, new Hide()),
				new CraftingMaterial(3, new Hide()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    