import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BookCasing } from "./book-casing";
import { BookClasp } from "./book-clasp";
import { BoundChapters } from "./bound-chapters";
import { EtherealDust } from "./ethereal-dust";

export class Book extends Item {
    constructor() {
        super(
            "book",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new BookCasing()),
				new CraftingMaterial(1, new BoundChapters()),
				new CraftingMaterial(1, new BookClasp()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
