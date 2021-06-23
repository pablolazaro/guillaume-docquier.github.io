import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Ore } from "./ore";
import { Aurelium } from "./aurelium";
import { Silver } from "./silver";
import { Coal } from "./coal";

export class MetalBuckles extends CustomizableComponent {
    constructor() {
        super(
            "metal buckles",
            [Professions.Armorsmith, Professions.Weaponsmith],
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
                new OutOfCombatHealthRegenMetalBucklesCustomization(),
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
                [Rarities.Epic.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegen],
                [Rarities.Legendary.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegen]
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
                [Rarities.Epic.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegen],
                [Rarities.Legendary.name]: [ItemsStats.Stealth, ItemsStats.OutOfCombatHealthRegen]
            }
        )
    }
}

class OutOfCombatHealthRegenMetalBucklesCustomization extends Customization {
    constructor() {
        super(
            "out of combat health regeneration",
            [
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(2, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OutOfCombatHealthRegen],
                [Rarities.Uncommon.name]: [ItemsStats.OutOfCombatHealthRegen],
                [Rarities.Rare.name]: [ItemsStats.OutOfCombatHealthRegen],
                [Rarities.Epic.name]: [ItemsStats.OutOfCombatHealthRegen],
                [Rarities.Legendary.name]: [ItemsStats.OutOfCombatHealthRegen]
            }
        )
    }
}
