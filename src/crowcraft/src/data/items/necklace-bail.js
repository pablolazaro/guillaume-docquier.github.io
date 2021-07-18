///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Aurelium } from "./aurelium";
import { Copper } from "./copper";
import { EtherealDust } from "./ethereal-dust";
import { Iron } from "./iron";
import { Ore } from "./ore";
import { Silver } from "./silver";
import { Tin } from "./tin";

export class NecklaceBail extends CustomizableComponent {
    constructor() {
        super(
            "necklace bail",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(10, new Silver()),
				new CraftingMaterial(5, new EtherealDust()),
            ],
            1,
            [
                new CopperNecklaceBailCustomization(),
				new IronNecklaceBailCustomization(),
				new TinNecklaceBailCustomization(),
				new SilverNecklaceBailCustomization(),
				new AureliumNecklaceBailCustomization(),
            ],
            ""
        );
    }
}

class CopperNecklaceBailCustomization extends Customization {
    constructor() {
        super(
            "copper",
            [
                new Copper(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Strength],
                [Rarities.Uncommon.name]: [ItemsStats.Strength],
                [Rarities.Rare.name]: [ItemsStats.Strength],
                [Rarities.Epic.name]: [ItemsStats.Strength],
                [Rarities.Legendary.name]: [ItemsStats.Strength],
            }
        )
    }
}

class IronNecklaceBailCustomization extends Customization {
    constructor() {
        super(
            "iron",
            [
                new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Constitution],
                [Rarities.Uncommon.name]: [ItemsStats.Constitution],
                [Rarities.Rare.name]: [ItemsStats.Constitution],
                [Rarities.Epic.name]: [ItemsStats.Constitution],
                [Rarities.Legendary.name]: [ItemsStats.Constitution],
            }
        )
    }
}

class TinNecklaceBailCustomization extends Customization {
    constructor() {
        super(
            "tin",
            [
                new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Intellect],
                [Rarities.Uncommon.name]: [ItemsStats.Intellect],
                [Rarities.Rare.name]: [ItemsStats.Intellect],
                [Rarities.Epic.name]: [ItemsStats.Intellect],
                [Rarities.Legendary.name]: [ItemsStats.Intellect],
            }
        )
    }
}

class SilverNecklaceBailCustomization extends Customization {
    constructor() {
        super(
            "silver",
            [
                new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Dexterity],
                [Rarities.Uncommon.name]: [ItemsStats.Dexterity],
                [Rarities.Rare.name]: [ItemsStats.Dexterity],
                [Rarities.Epic.name]: [ItemsStats.Dexterity],
                [Rarities.Legendary.name]: [ItemsStats.Dexterity],
            }
        )
    }
}

class AureliumNecklaceBailCustomization extends Customization {
    constructor() {
        super(
            "aurelium",
            [
                new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Spirit],
                [Rarities.Uncommon.name]: [ItemsStats.Spirit],
                [Rarities.Rare.name]: [ItemsStats.Spirit],
                [Rarities.Epic.name]: [ItemsStats.Spirit],
                [Rarities.Legendary.name]: [ItemsStats.Spirit],
            }
        )
    }
}
