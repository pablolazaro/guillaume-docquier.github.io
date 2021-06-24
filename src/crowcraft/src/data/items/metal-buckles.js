import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Silver } from "./silver";
import { Coal } from "./coal";
import { Ore } from "./ore";
import { Aurelium } from "./aurelium";

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
                new CraftingMaterial(10, new Aurelium()),
				new CraftingMaterial(10, new Aurelium()),
				new CraftingMaterial(2, new Coal()),
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
                new CraftingMaterial(10, new Silver()),
				new CraftingMaterial(10, new Silver()),
				new CraftingMaterial(2, new Coal()),
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
                new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(2, new Coal()),
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
