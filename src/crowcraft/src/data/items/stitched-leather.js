import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Hide } from "./hide";
import { LacingSinew } from "./lacing-sinew";

export class StitchedLeather extends CustomizableComponent {
    constructor() {
        super(
            "stitched leather",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    