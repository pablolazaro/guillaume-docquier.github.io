///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Aurelium } from "./aurelium";
import { Coal } from "./coal";
import { Copper } from "./copper";
import { Iron } from "./iron";
import { Ore } from "./ore";
import { Silver } from "./silver";
import { Tin } from "./tin";

export class MetalBar extends CustomizableComponent {
    constructor() {
        super(
            "metal bar",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(6, new Coal()),
            ],
            1,
            [
                new RoseAureliumMetalBarCustomization(),
				new SterlingMetalBarCustomization(),
				new CunifeMetalBarCustomization(),
				new SteelMetalBarCustomization(),
				new GreenAureliumMetalBarCustomization(),
				new ElectrumMetalBarCustomization(),
				new BlueSteelMetalBarCustomization(),
				new BronzeMetalBarCustomization(),
				new CopperMetalBarCustomization(),
				new IronMetalBarCustomization(),
				new TinMetalBarCustomization(),
				new SilverMetalBarCustomization(),
				new AureliumMetalBarCustomization(),
            ]
        );
    }
}

class RoseAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "rose aurelium",
            [
                new Iron(),
				new Aurelium(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower],
            }
        )
    }
}

class SterlingMetalBarCustomization extends Customization {
    constructor() {
        super(
            "sterling",
            [
                new Iron(),
				new Silver(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.FireArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.FireArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class CunifeMetalBarCustomization extends Customization {
    constructor() {
        super(
            "cunife",
            [
                new Copper(),
				new Copper(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.IceArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.IceArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class SteelMetalBarCustomization extends Customization {
    constructor() {
        super(
            "steel",
            [
                new Copper(),
				new Iron(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.ElectricityArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class GreenAureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "green aurelium",
            [
                new Tin(),
				new Tin(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.NatureArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.NatureArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class ElectrumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "electrum",
            [
                new Tin(),
				new Aurelium(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.SlashingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SlashingArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class BlueSteelMetalBarCustomization extends Customization {
    constructor() {
        super(
            "blue steel",
            [
                new Iron(),
				new Tin(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.CrushingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CrushingArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class BronzeMetalBarCustomization extends Customization {
    constructor() {
        super(
            "bronze",
            [
                new Copper(),
				new Copper(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.PiercingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.PiercingArmorPenetration, ItemsStats.AttackPower],
            }
        )
    }
}

class CopperMetalBarCustomization extends Customization {
    constructor() {
        super(
            "copper",
            [
                new Copper(),
				new Copper(),
				new Copper(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.AttackPower],
            }
        )
    }
}

class IronMetalBarCustomization extends Customization {
    constructor() {
        super(
            "iron",
            [
                new Iron(),
				new Iron(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeDamage, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeDamage, ItemsStats.AttackPower],
            }
        )
    }
}

class TinMetalBarCustomization extends Customization {
    constructor() {
        super(
            "tin",
            [
                new Tin(),
				new Tin(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower],
            }
        )
    }
}

class SilverMetalBarCustomization extends Customization {
    constructor() {
        super(
            "silver",
            [
                new Silver(),
				new Silver(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower],
            }
        )
    }
}

class AureliumMetalBarCustomization extends Customization {
    constructor() {
        super(
            "aurelium",
            [
                new Aurelium(),
				new Aurelium(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.CriticalStrikeDamage],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.CriticalStrikeDamage],
            }
        )
    }
}
