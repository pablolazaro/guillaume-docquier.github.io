import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { RunestoneEsoteric } from "./runestone-esoteric";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { StitchedLeather } from "./stitched-leather";
// import { Adhesive } from "./adhesive";
import { EtherealDust } from "./ethereal-dust";

export class BookCasing extends Item {
    constructor() {
        super(
            "book casing",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new StitchedLeather()),
				new CraftingMaterial(1, new StitchedLeather()),
				// new CraftingMaterial(1, new Adhesive()), // TODO Missing
				new CraftingMaterial(8, new EtherealDust()),
				// new CraftingMaterial(1, new RunestoneEsoteric()), // TODO Not sure about that
            ],
            1
        );
    }
}
    