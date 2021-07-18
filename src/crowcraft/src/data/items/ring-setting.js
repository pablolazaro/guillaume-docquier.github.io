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

export class RingSetting extends CustomizableComponent {
    constructor() {
        super(
            "ring setting",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(10, new Aurelium()),
				new CraftingMaterial(5, new EtherealDust()),
            ],
            1,
            [
                new CopperRingSettingCustomization(),
				new IronRingSettingCustomization(),
				new TinRingSettingCustomization(),
				new SilverRingSettingCustomization(),
				new AureliumRingSettingCustomization(),
            ],
            ""
        );
    }
}

class CopperRingSettingCustomization extends Customization {
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

class IronRingSettingCustomization extends Customization {
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

class TinRingSettingCustomization extends Customization {
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

class SilverRingSettingCustomization extends Customization {
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

class AureliumRingSettingCustomization extends Customization {
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
