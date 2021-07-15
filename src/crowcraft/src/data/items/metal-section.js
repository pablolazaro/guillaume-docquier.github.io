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

export class MetalSection extends CustomizableComponent {
    constructor() {
        super(
            "metal section",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new Ore()),
				new CraftingMaterial(6, new Ore()),
				new CraftingMaterial(6, new Ore()),
				new CraftingMaterial(6, new Coal()),
            ],
            1,
            [
                new RoseAureliumMetalSectionCustomization(),
				new SterlingMetalSectionCustomization(),
				new CunifeMetalSectionCustomization(),
				new SteelMetalSectionCustomization(),
				new GreenAureliumMetalSectionCustomization(),
				new ElectrumMetalSectionCustomization(),
				new CopperMetalSectionCustomization(),
				new IronMetalSectionCustomization(),
				new TinMetalSectionCustomization(),
				new SilverMetalSectionCustomization(),
				new AureliumMetalSectionCustomization(),
            ]
        );
    }
}

class RoseAureliumMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "rose aurelium",
            [
                new Iron(),
				new Aurelium(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Rare.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Epic.name]: [ItemsStats.PhysicalResistance, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.PhysicalResistance, ItemsStats.AttackPower],
            }
        )
    }
}

class SterlingMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "sterling",
            [
                new Iron(),
				new Silver(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElementalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElementalResistance],
                [Rarities.Rare.name]: [ItemsStats.ElementalResistance],
                [Rarities.Epic.name]: [ItemsStats.ElementalResistance, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.ElementalResistance, ItemsStats.AttackPower],
            }
        )
    }
}

class CunifeMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "cunife",
            [
                new Copper(),
				new Copper(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OrganicResistance],
                [Rarities.Uncommon.name]: [ItemsStats.OrganicResistance],
                [Rarities.Rare.name]: [ItemsStats.OrganicResistance],
                [Rarities.Epic.name]: [ItemsStats.OrganicResistance, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.OrganicResistance, ItemsStats.AttackPower],
            }
        )
    }
}

class SteelMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "steel",
            [
                new Copper(),
				new Iron(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Rare.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Epic.name]: [ItemsStats.PhysicalResistance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.PhysicalResistance, ItemsStats.SupportPower],
            }
        )
    }
}

class GreenAureliumMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "green aurelium",
            [
                new Tin(),
				new Tin(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElementalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElementalResistance],
                [Rarities.Rare.name]: [ItemsStats.ElementalResistance],
                [Rarities.Epic.name]: [ItemsStats.ElementalResistance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.ElementalResistance, ItemsStats.SupportPower],
            }
        )
    }
}

class ElectrumMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "electrum",
            [
                new Tin(),
				new Aurelium(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OrganicResistance],
                [Rarities.Uncommon.name]: [ItemsStats.OrganicResistance],
                [Rarities.Rare.name]: [ItemsStats.OrganicResistance],
                [Rarities.Epic.name]: [ItemsStats.OrganicResistance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.OrganicResistance, ItemsStats.SupportPower],
            }
        )
    }
}

class CopperMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "copper",
            [
                new Copper(),
				new Copper(),
				new Copper(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AttackPower],
                [Rarities.Uncommon.name]: [ItemsStats.AttackPower],
                [Rarities.Rare.name]: [ItemsStats.AttackPower],
                [Rarities.Epic.name]: [ItemsStats.AttackPower, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.AttackPower, ItemsStats.Stamina],
            }
        )
    }
}

class IronMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "iron",
            [
                new Iron(),
				new Iron(),
				new Iron(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.Stamina],
            }
        )
    }
}

class TinMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "tin",
            [
                new Tin(),
				new Tin(),
				new Tin(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Rare.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Epic.name]: [ItemsStats.PhysicalResistance, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.PhysicalResistance, ItemsStats.Stamina],
            }
        )
    }
}

class SilverMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "silver",
            [
                new Silver(),
				new Silver(),
				new Silver(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElementalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElementalResistance],
                [Rarities.Rare.name]: [ItemsStats.ElementalResistance],
                [Rarities.Epic.name]: [ItemsStats.ElementalResistance, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.ElementalResistance, ItemsStats.Stamina],
            }
        )
    }
}

class AureliumMetalSectionCustomization extends Customization {
    constructor() {
        super(
            "aurelium",
            [
                new Aurelium(),
				new Aurelium(),
				new Aurelium(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OrganicResistance],
                [Rarities.Uncommon.name]: [ItemsStats.OrganicResistance],
                [Rarities.Rare.name]: [ItemsStats.OrganicResistance],
                [Rarities.Epic.name]: [ItemsStats.OrganicResistance, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.OrganicResistance, ItemsStats.Stamina],
            }
        )
    }
}
