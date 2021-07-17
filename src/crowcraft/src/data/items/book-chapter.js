///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { Granite } from "./granite";
import { Limestone } from "./limestone";
import { Marble } from "./marble";
import { Slate } from "./slate";
import { StitchedLeather } from "./stitched-leather";
import { Stone } from "./stone";
import { Travertine } from "./travertine";

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
                new RedemptionBookChapterCustomization(),
				new SinBookChapterCustomization(),
				new IndulgenceBookChapterCustomization(),
				new FervorBookChapterCustomization(),
				new AbsolutionBookChapterCustomization(),
            ],
            ""
        );
    }
}

class RedemptionBookChapterCustomization extends Customization {
    constructor() {
        super(
            "redemption",
            [
                new Travertine(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingResistance],
                [Rarities.Rare.name]: [ItemsStats.SlashingResistance],
                [Rarities.Epic.name]: [ItemsStats.SlashingResistance],
                [Rarities.Legendary.name]: [ItemsStats.SlashingResistance],
            }
        )
    }
}

class SinBookChapterCustomization extends Customization {
    constructor() {
        super(
            "sin",
            [
                new Marble(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireResistance],
                [Rarities.Uncommon.name]: [ItemsStats.FireResistance],
                [Rarities.Rare.name]: [ItemsStats.FireResistance],
                [Rarities.Epic.name]: [ItemsStats.FireResistance],
                [Rarities.Legendary.name]: [ItemsStats.FireResistance],
            }
        )
    }
}

class IndulgenceBookChapterCustomization extends Customization {
    constructor() {
        super(
            "indulgence",
            [
                new Limestone(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingResistance],
                [Rarities.Rare.name]: [ItemsStats.CrushingResistance],
                [Rarities.Epic.name]: [ItemsStats.CrushingResistance],
                [Rarities.Legendary.name]: [ItemsStats.CrushingResistance],
            }
        )
    }
}

class FervorBookChapterCustomization extends Customization {
    constructor() {
        super(
            "fervor",
            [
                new Granite(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Rare.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Epic.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityResistance],
            }
        )
    }
}

class AbsolutionBookChapterCustomization extends Customization {
    constructor() {
        super(
            "absolution",
            [
                new Slate(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingResistance],
                [Rarities.Rare.name]: [ItemsStats.PiercingResistance],
                [Rarities.Epic.name]: [ItemsStats.PiercingResistance],
                [Rarities.Legendary.name]: [ItemsStats.PiercingResistance],
            }
        )
    }
}
