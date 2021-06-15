import { CustomizableComponent, CraftingMaterial, Rarities, Professions } from "../item";
import { Ore, Aurelium, Copper, Iron, Silver, Tin } from "./ores";
import { Coal } from "./coal";

export class MetalScales extends CustomizableComponent {
    constructor(
        name = "metal scales",
        craftingMaterials = [
            new CraftingMaterial(16, new Iron()),
            new CraftingMaterial(10, new Ore()),
            new CraftingMaterial(10, new Ore()),
            new CraftingMaterial(12, new Coal())
        ]
    ) {
        super(
            name,
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            craftingMaterials,
            1
        );
    }

    getCustomizationOptions() {
        return [
            new SteelMetalScales(),
            new DarkBronzeMetalScales(),
            new BrightSteelMetalScales(),
            new AureliumSteelMetalScales(),
            new InvarMetalScales(),
            new SilveredIronMetalScales(),
            new TigerIronMetalScales(),
            new BlueSteelMetalScales(),
            new ForestAureliumMetalScales(),
            new DarkElectrumMetalScales(),
        ];
    }
}

class SteelMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (steel)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "bleed resistance";
    }
}

class DarkBronzeMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (dark bronze)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "fire resistance";
    }
}

class BrightSteelMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (bright steel)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "ice resistance";
    }
}

class AureliumSteelMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (aurelium steel)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Copper()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "electricity resistance";
    }
}

class InvarMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (invar)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "nature resistance";
    }
}

class SilveredIronMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (silvered iron)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "poison resistance";
    }
}

class TigerIronMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (tiger iron)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Iron()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "disease resistance";
    }
}

class BlueSteelMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (blue steel)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "slashing resistance";
    }
}

class ForestAureliumMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (forest aurelium)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Tin()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "crushing resistance";
    }
}

class DarkElectrumMetalScales extends MetalScales {
    constructor() {
        super(
            "metal scales (dark electrum)",
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Silver()),
                new CraftingMaterial(10, new Aurelium()),
                new CraftingMaterial(12, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "piercing resistance";
    }
}