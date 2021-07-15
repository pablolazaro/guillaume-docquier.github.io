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
                new Iron(),
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
                new Tin(),
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
                new Copper(),
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
                new Aurelium(),
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
                new Silver(),
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
