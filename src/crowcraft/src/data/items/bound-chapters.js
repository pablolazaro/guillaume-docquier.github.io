///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BookChapter } from "./book-chapter";
import { LacingSinew } from "./lacing-sinew";

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
            1,
            ""
        );
    }
}
