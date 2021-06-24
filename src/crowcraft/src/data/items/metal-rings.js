import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Silver } from "./silver";
import { Copper } from "./copper";
import { Tin } from "./tin";
import { Aurelium } from "./aurelium";
import { Iron } from "./iron";
import { Coal } from "./coal";
import { Ore } from "./ore";

export class MetalRings extends CustomizableComponent {
    constructor() {
        super(
            "metal rings",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Ore()),
				new CraftingMaterial(20, new Ore()),
				new CraftingMaterial(12, new Coal()),
            ],
            1,
            [
                new SteelMetalRingsCustomization(),
				new DarkBronzeMetalRingsCustomization(),
				new BrightSteelMetalRingsCustomization(),
				new AureliumSteelMetalRingsCustomization(),
				new InvarMetalRingsCustomization(),
				new SilveredIronMetalRingsCustomization(),
				new TigerIronMetalRingsCustomization(),
				new BlueSteelMetalRingsCustomization(),
				new ForestAureliumMetalRingsCustomization(),
				new DarkElectrumMetalRingsCustomization(),
				new SterlingMetalRingsCustomization(),
				new RoseAureliumMetalRingsCustomization(),
            ]
        );
    }
}

class SteelMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "steel",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Copper()),
				new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.BleedDamageBonus],
            }
        )
    }
}

class DarkBronzeMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "dark bronze",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Copper()),
				new CraftingMaterial(20, new Tin()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.FireDamageBonus],
            }
        )
    }
}

class BrightSteelMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "bright steel",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Copper()),
				new CraftingMaterial(20, new Silver()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.IceDamageBonus],
            }
        )
    }
}

class AureliumSteelMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "aurelium steel",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Copper()),
				new CraftingMaterial(20, new Aurelium()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityDamageBonus],
            }
        )
    }
}

class InvarMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "invar",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Tin()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.NatureDamageBonus],
            }
        )
    }
}

class SilveredIronMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "silvered iron",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Silver()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PoisonDamageBonus],
            }
        )
    }
}

class TigerIronMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "tiger iron",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Aurelium()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.DiseaseDamageBonus],
            }
        )
    }
}

class BlueSteelMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "blue steel",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Tin()),
				new CraftingMaterial(20, new Silver()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.SlashingDamageBonus],
            }
        )
    }
}

class ForestAureliumMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "forest aurelium",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Tin()),
				new CraftingMaterial(20, new Aurelium()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.CrushingDamageBonus],
            }
        )
    }
}

class DarkElectrumMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "dark electrum",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Silver()),
				new CraftingMaterial(20, new Aurelium()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PiercingDamageBonus],
            }
        )
    }
}

class SterlingMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "sterling",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Silver()),
				new CraftingMaterial(20, new Silver()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeDamage],
            }
        )
    }
}

class RoseAureliumMetalRingsCustomization extends Customization {
    constructor() {
        super(
            "rose aurelium",
            [
                new CraftingMaterial(20, new Iron()),
				new CraftingMaterial(20, new Aurelium()),
				new CraftingMaterial(20, new Aurelium()),
				new CraftingMaterial(12, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount],
            }
        )
    }
}
