///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Aurelium } from "./aurelium";
import { Coal } from "./coal";
import { Ore } from "./ore";
import { Silver } from "./silver";

export class MetalBuckles extends CustomizableComponent {
    constructor() {
        super(
            "metal buckles",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(2, new Coal()),
            ],
            1,
            [
                new AureliumStealthMetalBucklesCustomization(),
				new SilverStealthMetalBucklesCustomization(),
				new OutOfCombatHealthRegenerationMetalBucklesCustomization(),
            ]
        );
    }
}

class AureliumStealthMetalBucklesCustomization extends Customization {
    constructor() {
        super(
            "aurelium stealth",
            [
                new Aurelium(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stealth],
                [Rarities.Uncommon.name]: [ItemsStats.Stealth],
                [Rarities.Rare.name]: [ItemsStats.Stealth],
                [Rarities.Epic.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Legendary.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegeneration],
            }
        )
    }
}

class SilverStealthMetalBucklesCustomization extends Customization {
    constructor() {
        super(
            "silver stealth",
            [
                new Silver(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stealth],
                [Rarities.Uncommon.name]: [ItemsStats.Stealth],
                [Rarities.Rare.name]: [ItemsStats.Stealth],
                [Rarities.Epic.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Legendary.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegeneration],
            }
        )
    }
}

class OutOfCombatHealthRegenerationMetalBucklesCustomization extends Customization {
    constructor() {
        super(
            "out of combat health regeneration",
            [
                new Ore(),
				new Ore(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Rare.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Epic.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Legendary.name]: [ItemsStats.OutOfCombatHealthRegeneration],
            }
        )
    }
}
