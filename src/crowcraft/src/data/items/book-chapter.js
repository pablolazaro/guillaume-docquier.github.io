import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { StitchedLeather } from "./stitched-leather";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { Stone } from "./stone";

export class BookChapter extends CustomizableComponent {
    constructor() {
        super(
            "book chapter",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new StitchedLeather()),
				new CraftingMaterial(3, new Stone()),
            ],
            1,
            [
                // TODO Customizations
            ]
        );
    }
}
    