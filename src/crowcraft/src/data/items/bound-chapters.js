import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { LacingSinew } from "./lacing-sinew";
import { BookChapter } from "./book-chapter";

export class BoundChapters extends Item {
    constructor() {
        super(
            "bound chapters",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new BookChapter()),
				new CraftingMaterial(1, new BookChapter()),
				new CraftingMaterial(1, new BookChapter()),
				new CraftingMaterial(1, new LacingSinew()),
            ],
            1
        );
    }
}
