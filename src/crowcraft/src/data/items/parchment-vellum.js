import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { PenAndInk } from "./pen-and-ink";
import { ParchmentPaper } from "./parchment-paper";
import { Wood } from "./wood";

export class ParchmentVellum extends Item {
    constructor() {
        super(
            "parchment vellum",
            [Professions.Woodworker],
            [Rarities.Poor],
            [
                new CraftingMaterial(1, new Wood()),
				new CraftingMaterial(1, new PenAndInk()),
				new CraftingMaterial(1, new ParchmentPaper()),
            ],
            1
        );
    }
}
