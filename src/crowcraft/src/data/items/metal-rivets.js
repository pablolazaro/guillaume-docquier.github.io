import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Ore } from "./ore";
import { Iron } from "./iron";
import { Coal } from "./coal";
import { Aurelium } from "./aurelium";

export class MetalRivets extends CustomizableComponent {
    constructor() {
        super(
            "metal rivets",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(5, new Ore()),
				new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(2, new Coal()),
            ],
            1,
            [
                new StealthMetalRivetsCustomization(),
				new OutOfCombatHealthRegenerationMetalRivetsCustomization(),
            ]
        );
    }
}

class StealthMetalRivetsCustomization extends Customization {
    constructor() {
        super(
            "stealth",
            [
                new CraftingMaterial(5, new Aurelium()),
				new CraftingMaterial(3, new Iron()),
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

class OutOfCombatHealthRegenerationMetalRivetsCustomization extends Customization {
    constructor() {
        super(
            "out of combat health regeneration",
            [
                new CraftingMaterial(5, new Ore()),
				new CraftingMaterial(3, new Ore()),
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
