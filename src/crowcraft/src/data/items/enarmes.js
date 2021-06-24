import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { StitchedLeather } from "./stitched-leather";

export class Enarmes extends Item {
    constructor() {
        super(
            "enarmes",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new StitchedLeather()),
				new CraftingMaterial(1, new StitchedLeather()),
            ],
            1
        );
    }
}
