import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Adhesive } from "./adhesive";
import { EtherealDust } from "./ethereal-dust";
import { StitchedLeather } from "./stitched-leather";
import { CompositeWoodPlank } from "./composite-wood-plank";

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
				new CraftingMaterial(1, new Adhesive()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1
        );
    }
}
