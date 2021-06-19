import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Ore, Aurelium, Copper, Iron, Silver, Tin } from "./ores";
import { Coal } from "./coal";

export class MetalScales extends CustomizableComponent {
    constructor() {
        super(
            "metal scales",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(12, new Coal())
            ],
            1,
            [
                new SteelMetalScalesCustomization(),
                new DarkBronzeMetalScalesCustomization(),
                new BrightSteelMetalScalesCustomization(),
                new AureliumSteelMetalScalesCustomization(),
                new InvarMetalScalesCustomization(),
                new SilveredIronMetalScalesCustomization(),
                new TigerIronMetalScalesCustomization(),
                new BlueSteelMetalScalesCustomization(),
                new ForestAureliumMetalScalesCustomization(),
                new DarkElectrumMetalScalesCustomization(),
            ]
        );
    }
}

class SteelMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "steel",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.BleedResistance],
                [Rarities.Uncommon]: [ItemsStats.BleedResistance],
                [Rarities.Rare]: [ItemsStats.BleedResistance],
                [Rarities.Epic]: [ItemsStats.BleedResistance],
                [Rarities.Legendary]: [ItemsStats.BleedResistance]
            }
        )
    }
}

class DarkBronzeMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "dark bronze",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.FireResistance],
                [Rarities.Uncommon]: [ItemsStats.FireResistance],
                [Rarities.Rare]: [ItemsStats.FiredResistance],
                [Rarities.Epic]: [ItemsStats.FireResistance],
                [Rarities.Legendary]: [ItemsStats.FireResistance]
            }
        )
    }
}

class BrightSteelMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "bright steel",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.IceResistance],
                [Rarities.Uncommon]: [ItemsStats.IceResistance],
                [Rarities.Rare]: [ItemsStats.IceResistance],
                [Rarities.Epic]: [ItemsStats.IceResistance],
                [Rarities.Legendary]: [ItemsStats.IceResistance]
            }
        )
    }
}

class AureliumSteelMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "aurelium steel",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.ElectricityResistance],
                [Rarities.Uncommon]: [ItemsStats.ElectricityResistance],
                [Rarities.Rare]: [ItemsStats.ElectricityResistance],
                [Rarities.Epic]: [ItemsStats.ElectricityResistance],
                [Rarities.Legendary]: [ItemsStats.ElectricityResistance]
            }
        )
    }
}

class InvarMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "invar",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.NatureResistance],
                [Rarities.Uncommon]: [ItemsStats.NatureResistance],
                [Rarities.Rare]: [ItemsStats.NatureResistance],
                [Rarities.Epic]: [ItemsStats.NatureResistance],
                [Rarities.Legendary]: [ItemsStats.NatureResistance]
            }
        )
    }
}

class SilveredIronMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "silvered iron",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.PoisonResistance],
                [Rarities.Uncommon]: [ItemsStats.PoisonResistance],
                [Rarities.Rare]: [ItemsStats.PoisonResistance],
                [Rarities.Epic]: [ItemsStats.PoisonResistance],
                [Rarities.Legendary]: [ItemsStats.PoisonResistance]
            }
        )
    }
}

class TigerIronMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "tiger iron",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.DiseaseResistance],
                [Rarities.Uncommon]: [ItemsStats.DiseaseResistance],
                [Rarities.Rare]: [ItemsStats.DiseaseResistance],
                [Rarities.Epic]: [ItemsStats.DiseaseResistance],
                [Rarities.Legendary]: [ItemsStats.DiseaseResistance]
            }
        )
    }
}

class BlueSteelMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "blue steel",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.SlashingResistance],
                [Rarities.Uncommon]: [ItemsStats.SlashingResistance],
                [Rarities.Rare]: [ItemsStats.SlashingResistance],
                [Rarities.Epic]: [ItemsStats.SlashingResistance],
                [Rarities.Legendary]: [ItemsStats.SlashingResistance]
            }
        )
    }
}

class ForestAureliumMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "forest aurelium",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.CrushingResistance],
                [Rarities.Uncommon]: [ItemsStats.CrushingResistance],
                [Rarities.Rare]: [ItemsStats.CrushingResistance],
                [Rarities.Epic]: [ItemsStats.CrushingResistance],
                [Rarities.Legendary]: [ItemsStats.CrushingResistance]
            }
        )
    }
}

class DarkElectrumMetalScalesCustomization extends Customization {
    constructor() {
        super(
            "dark electrum",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ],
            {
                [Rarities.Common]: [ItemsStats.PiercingResistance],
                [Rarities.Uncommon]: [ItemsStats.PiercingResistance],
                [Rarities.Rare]: [ItemsStats.PiercingResistance],
                [Rarities.Epic]: [ItemsStats.PiercingResistance],
                [Rarities.Legendary]: [ItemsStats.PiercingResistance]
            }
        )
    }
}