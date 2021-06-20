import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { RunestoneEsoteric } from "./runestone-esoteric";
import { CompositeWoodPlank } from "./composite-wood-plank";

export class BowRest extends Item {
    constructor() {
        super(
            "bow rest",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				// new CraftingMaterial(1, new RunestoneEsoteric()), // TODO Not sure about that
            ],
            1
        );
    }
}
    