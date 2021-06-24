import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { Ore } from "./ore";
import { Aurelium } from "./aurelium";
import { Tin } from "./tin";
import { Iron } from "./iron";
import { Silver } from "./silver";
import { Copper } from "./copper";
import { Coal } from "./coal";

export class ArrowheadBundle extends CustomizableComponent {
    constructor() {
        super(
            "arrowhead bundle",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(9, new Ore()),
				new CraftingMaterial(1, new Coal()),
            ],
            1,
            [
                new PiercingArrowheadBundleCustomization(),
				new SlashingArrowheadBundleCustomization(),
				new CrushingArrowheadBundleCustomization(),
				new FireArrowheadBundleCustomization(),
				new IceArrowheadBundleCustomization(),
            ]
        );
    }
}

class PiercingArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "piercing",
            [
                new CraftingMaterial(9, new Iron()),
				new CraftingMaterial(1, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingDamageType],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingDamageType],
                [Rarities.Rare.name]: [ItemsStats.PiercingDamageType],
                [Rarities.Epic.name]: [ItemsStats.PiercingDamageType],
                [Rarities.Legendary.name]: [ItemsStats.PiercingDamageType],
            }
        )
    }
}

class SlashingArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "slashing",
            [
                new CraftingMaterial(9, new Tin()),
				new CraftingMaterial(1, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingDamageType],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingDamageType],
                [Rarities.Rare.name]: [ItemsStats.SlashingDamageType],
                [Rarities.Epic.name]: [ItemsStats.SlashingDamageType],
                [Rarities.Legendary.name]: [ItemsStats.SlashingDamageType],
            }
        )
    }
}

class CrushingArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "crushing",
            [
                new CraftingMaterial(9, new Copper()),
				new CraftingMaterial(1, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingDamageType],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingDamageType],
                [Rarities.Rare.name]: [ItemsStats.CrushingDamageType],
                [Rarities.Epic.name]: [ItemsStats.CrushingDamageType],
                [Rarities.Legendary.name]: [ItemsStats.CrushingDamageType],
            }
        )
    }
}

class FireArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "fire",
            [
                new CraftingMaterial(9, new Aurelium()),
				new CraftingMaterial(1, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireDamageType],
                [Rarities.Uncommon.name]: [ItemsStats.FireDamageType],
                [Rarities.Rare.name]: [ItemsStats.FireDamageType],
                [Rarities.Epic.name]: [ItemsStats.FireDamageType],
                [Rarities.Legendary.name]: [ItemsStats.FireDamageType],
            }
        )
    }
}

class IceArrowheadBundleCustomization extends Customization {
    constructor() {
        super(
            "ice",
            [
                new CraftingMaterial(9, new Silver()),
				new CraftingMaterial(1, new Coal()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceDamageType],
                [Rarities.Uncommon.name]: [ItemsStats.IceDamageType],
                [Rarities.Rare.name]: [ItemsStats.IceDamageType],
                [Rarities.Epic.name]: [ItemsStats.IceDamageType],
                [Rarities.Legendary.name]: [ItemsStats.IceDamageType],
            }
        )
    }
}
