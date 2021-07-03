import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Silver } from "./silver";
import { Aurelium } from "./aurelium";
import { Ore } from "./ore";
import { Coal } from "./coal";
import { Copper } from "./copper";
import { Iron } from "./iron";
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
                new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Silver()),
				new CraftingMaterial(6, new Silver()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Copper()),
				new CraftingMaterial(6, new Copper()),
				new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Copper()),
				new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Tin()),
				new CraftingMaterial(6, new Tin()),
				new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Tin()),
				new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Silver()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Copper()),
				new CraftingMaterial(6, new Copper()),
				new CraftingMaterial(6, new Copper()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Iron()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Tin()),
				new CraftingMaterial(6, new Tin()),
				new CraftingMaterial(6, new Tin()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Silver()),
				new CraftingMaterial(6, new Silver()),
				new CraftingMaterial(6, new Silver()),
				new CraftingMaterial(6, new Coal()),
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
                new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Aurelium()),
				new CraftingMaterial(6, new Coal()),
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
