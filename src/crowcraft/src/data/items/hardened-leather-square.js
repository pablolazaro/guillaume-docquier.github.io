import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Hide } from "./hide";
import { LacingSinew } from "./lacing-sinew";

export class HardenedLeatherSquare extends CustomizableComponent {
    constructor() {
        super(
            "hardened leather square",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(5, new Hide()),
				new CraftingMaterial(5, new Hide()),
				new CraftingMaterial(5, new Hide()),
				new CraftingMaterial(3, new LacingSinew()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    