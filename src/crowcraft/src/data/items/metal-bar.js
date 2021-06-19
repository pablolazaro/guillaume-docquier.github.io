import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Ore, Aurelium, Copper, Iron, Silver, Tin } from "./ores";
import { Coal } from "./coal";

export class MetalBar extends CustomizableComponent {
    constructor() {
        super(
            "metal bar",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new Ore()),
                new CraftingMaterial(6, new Ore()),
                new CraftingMaterial(6, new Ore()),
                new CraftingMaterial(6, new Coal())
            ],
            1,
            [
                new IronMetalBarCustomization(),
                new CopperMetalBarCustomization(),
                new AureliumMetalBarCustomization(),
                new TinMetalBarCustomization(),
                new SilverMetalBarCustomization(),
                new RoseAureliumMetalBarCustomization(),
                new ElectrumMetalBarCustomization(),
                new SteelMetalBarCustomization(),
                new SterlingMetalBarCustomization(),
                new GreenAureliumMetalBarCustomization(),
                new CunifeAureliumMetalBarCustomization(),
                new BlueSteelAureliumMetalBarCustomization(),
                new BronzeAureliumMetalBarCustomization(),
            ]
        );
    }
}

class IronMetalBarCustomization extends Customization {
    constructor() {
        super(
            "iron",
            [
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalDamage, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalDamage, ItemsStats.AttackPower]
            }
        )
    }
}

class CopperMetalBarCustomization extends Customization {
    constructor() {
        super(
            "copper",
            [
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrike],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrike],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrike],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrike, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrike, ItemsStats.AttackPower]
            }
        )
    }
}

class AureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "aurelium",
            [
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrike],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrike],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrike],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrike, ItemsStats.CriticalDamage],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrike, ItemsStats.CriticalDamage]
            }
        )
    }
}

class TinMetalBarCustomization extends Customization {
    constructor() {
        super(
            "tin",
            [
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower]
            }
        )
    }
}

class SilverMetalBarCustomization extends Customization {
    constructor() {
        super(
            "silver",
            [
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower]
            }
        )
    }
}

class RoseAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "rose aurelium",
            [
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower]
            }
        )
    }
}

class ElectrumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "electrum",
            [
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.ElectricityArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class SteelMetalBarCustomization extends Customization {
    constructor() {
        super(
            "steel",
            [
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.SlashingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SlashingArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class SterlingMetalBarCustomization extends Customization {
    constructor() {
        super(
            "sterling",
            [
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.FireArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.FireArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class GreenAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "green aurelium",
            [
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Aurelium()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.NatureArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.NatureArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class CunifeAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "cunife",
            [
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.IceArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.IceArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class BlueSteelAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "blue steel",
            [
                new CraftingMaterial(6, new Iron()),
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Silver()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.CrushingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CrushingArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class BronzeAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "bronze",
            [
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Copper()),
                new CraftingMaterial(6, new Tin()),
                new CraftingMaterial(6, new Coal())
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.PiercingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.PiercingArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}
