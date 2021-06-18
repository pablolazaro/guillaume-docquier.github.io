import { CustomizableComponent, Customization, CustomizationEffect, CraftingMaterial, Rarities, Professions } from "models";
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
                [Rarities.Common.name]: [new CustomizationEffect("bleed resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("bleed resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("bleed resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("bleed resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("bleed resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("fire resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("fire resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("fire resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("fire resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("fire resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("ice resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("ice resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("ice resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("ice resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("ice resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("electricity resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("electricity resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("electricity resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("electricity resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("electricity resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("nature resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("nature resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("nature resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("nature resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("nature resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("poison resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("poison resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("poison resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("poison resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("poison resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("disease resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("disease resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("disease resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("disease resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("disease resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("slashing resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("slashing resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("slashing resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("slashing resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("slashing resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("crushing resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("crushing resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("crushing resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("crushing resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("crushing resistance", 11.24)]
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
                [Rarities.Common.name]: [new CustomizationEffect("piercing resistance", 8.31)],
                [Rarities.Uncommon.name]: [new CustomizationEffect("piercing resistance", 9.33)],
                [Rarities.Rare.name]: [new CustomizationEffect("piercing resistance", 9.85)],
                [Rarities.Epic.name]: [new CustomizationEffect("piercing resistance", 10.58)],
                [Rarities.Legendary.name]: [new CustomizationEffect("piercing resistance", 11.24)]
            }
        )
    }
}