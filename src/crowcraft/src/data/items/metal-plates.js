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

export class MetalPlates extends CustomizableComponent {
    constructor() {
        super(
            "metal plates",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(16, new Iron()),
				new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(10, new Ore()),
				new CraftingMaterial(12, new Coal()),
            ],
            1,
            [
                new SteelMetalPlatesCustomization(),
				new DarkBronzeMetalPlatesCustomization(),
				new BrightSteelMetalPlatesCustomization(),
				new AureliumSteelMetalPlatesCustomization(),
				new InvarMetalPlatesCustomization(),
				new SilveredIronMetalPlatesCustomization(),
				new TigerIronMetalPlatesCustomization(),
				new BlueSteelMetalPlatesCustomization(),
				new ForestAureliumMetalPlatesCustomization(),
				new DarkElectrumMetalPlatesCustomization(),
            ]
        );
    }
}

class SteelMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "steel",
            [
                new Iron(),
				new Copper(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BleedResistance],
                [Rarities.Uncommon.name]: [ItemsStats.BleedResistance],
                [Rarities.Rare.name]: [ItemsStats.BleedResistance],
                [Rarities.Epic.name]: [ItemsStats.BleedResistance],
                [Rarities.Legendary.name]: [ItemsStats.BleedResistance],
            }
        )
    }
}

class DarkBronzeMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "dark bronze",
            [
                new Iron(),
				new Copper(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireResistance],
                [Rarities.Uncommon.name]: [ItemsStats.FireResistance],
                [Rarities.Rare.name]: [ItemsStats.FireResistance],
                [Rarities.Epic.name]: [ItemsStats.FireResistance],
                [Rarities.Legendary.name]: [ItemsStats.FireResistance],
            }
        )
    }
}

class BrightSteelMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "bright steel",
            [
                new Iron(),
				new Copper(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceResistance],
                [Rarities.Uncommon.name]: [ItemsStats.IceResistance],
                [Rarities.Rare.name]: [ItemsStats.IceResistance],
                [Rarities.Epic.name]: [ItemsStats.IceResistance],
                [Rarities.Legendary.name]: [ItemsStats.IceResistance],
            }
        )
    }
}

class AureliumSteelMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "aurelium steel",
            [
                new Iron(),
				new Copper(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Rare.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Epic.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityResistance],
            }
        )
    }
}

class InvarMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "invar",
            [
                new Iron(),
				new Iron(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureResistance],
                [Rarities.Uncommon.name]: [ItemsStats.NatureResistance],
                [Rarities.Rare.name]: [ItemsStats.NatureResistance],
                [Rarities.Epic.name]: [ItemsStats.NatureResistance],
                [Rarities.Legendary.name]: [ItemsStats.NatureResistance],
            }
        )
    }
}

class SilveredIronMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "silvered iron",
            [
                new Iron(),
				new Iron(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonResistance],
                [Rarities.Rare.name]: [ItemsStats.PoisonResistance],
                [Rarities.Epic.name]: [ItemsStats.PoisonResistance],
                [Rarities.Legendary.name]: [ItemsStats.PoisonResistance],
            }
        )
    }
}

class TigerIronMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "tiger iron",
            [
                new Iron(),
				new Iron(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Uncommon.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Rare.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Epic.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Legendary.name]: [ItemsStats.DiseaseResistance],
            }
        )
    }
}

class BlueSteelMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "blue steel",
            [
                new Iron(),
				new Tin(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingResistance],
                [Rarities.Rare.name]: [ItemsStats.SlashingResistance],
                [Rarities.Epic.name]: [ItemsStats.SlashingResistance],
                [Rarities.Legendary.name]: [ItemsStats.SlashingResistance],
            }
        )
    }
}

class ForestAureliumMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "forest aurelium",
            [
                new Iron(),
				new Tin(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingResistance],
                [Rarities.Rare.name]: [ItemsStats.CrushingResistance],
                [Rarities.Epic.name]: [ItemsStats.CrushingResistance],
                [Rarities.Legendary.name]: [ItemsStats.CrushingResistance],
            }
        )
    }
}

class DarkElectrumMetalPlatesCustomization extends Customization {
    constructor() {
        super(
            "dark electrum",
            [
                new Iron(),
				new Silver(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingResistance],
                [Rarities.Rare.name]: [ItemsStats.PiercingResistance],
                [Rarities.Epic.name]: [ItemsStats.PiercingResistance],
                [Rarities.Legendary.name]: [ItemsStats.PiercingResistance],
            }
        )
    }
}
