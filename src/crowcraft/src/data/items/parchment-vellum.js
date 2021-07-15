///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ParchmentPaper } from "./parchment-paper";
import { PenAndInk } from "./pen-and-ink";
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
