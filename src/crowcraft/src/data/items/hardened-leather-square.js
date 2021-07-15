///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { DurableHide } from "./durable-hide";
import { FlexibleHide } from "./flexible-hide";
import { Hide } from "./hide";
import { LacingSinew } from "./lacing-sinew";
import { SoftHide } from "./soft-hide";
import { StrongHide } from "./strong-hide";
import { ToughHide } from "./tough-hide";

export class HardenedLeatherSquare extends CustomizableComponent {
    constructor() {
        super(
            "hardened leather square",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(10, new Hide()),
				new CraftingMaterial(10, new Hide()),
				new CraftingMaterial(10, new Hide()),
				new CraftingMaterial(6, new LacingSinew()),
            ],
            1,
            [
                new LimberCoriumHardenedLeatherSquareCustomization(),
				new SoftCoriumHardenedLeatherSquareCustomization(),
				new SturdyCoriumHardenedLeatherSquareCustomization(),
				new StoutCoriumHardenedLeatherSquareCustomization(),
				new CoriumHardenedLeatherSquareCustomization(),
				new ChamoiseHardenedLeatherSquareCustomization(),
				new SturdyBicastHardenedLeatherSquareCustomization(),
				new LimberGrainHardenedLeatherSquareCustomization(),
				new SplitGrainHardenedLeatherSquareCustomization(),
				new NappaHardenedLeatherSquareCustomization(),
				new BicastHardenedLeatherSquareCustomization(),
				new SuedeHardenedLeatherSquareCustomization(),
            ]
        );
    }
}

class LimberCoriumHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "limber corium",
            [
                new DurableHide(),
				new FlexibleHide(),
				new FlexibleHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.BleedDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.BleedDamageBonus],
            }
        )
    }
}

class SoftCoriumHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "soft corium",
            [
                new DurableHide(),
				new SoftHide(),
				new SoftHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.FireDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.FireDamageBonus],
            }
        )
    }
}

class SturdyCoriumHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "sturdy corium",
            [
                new DurableHide(),
				new StrongHide(),
				new StrongHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.IceDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.IceDamageBonus],
            }
        )
    }
}

class StoutCoriumHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "stout corium",
            [
                new DurableHide(),
				new ToughHide(),
				new ToughHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.ElectricityDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityDamageBonus],
            }
        )
    }
}

class CoriumHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "corium",
            [
                new FlexibleHide(),
				new DurableHide(),
				new DurableHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.NatureDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.NatureDamageBonus],
            }
        )
    }
}

class ChamoiseHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "chamoise",
            [
                new FlexibleHide(),
				new SoftHide(),
				new SoftHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PoisonDamageBonus],
            }
        )
    }
}

class SturdyBicastHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "sturdy bicast",
            [
                new FlexibleHide(),
				new StrongHide(),
				new StrongHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.DiseaseDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.DiseaseDamageBonus],
            }
        )
    }
}

class LimberGrainHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "limber grain",
            [
                new FlexibleHide(),
				new ToughHide(),
				new ToughHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.SlashingDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.SlashingDamageBonus],
            }
        )
    }
}

class SplitGrainHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "split grain",
            [
                new SoftHide(),
				new DurableHide(),
				new DurableHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.CrushingDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.CrushingDamageBonus],
            }
        )
    }
}

class NappaHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "nappa",
            [
                new SoftHide(),
				new FlexibleHide(),
				new FlexibleHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PiercingDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PiercingDamageBonus],
            }
        )
    }
}

class BicastHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "bicast",
            [
                new StrongHide(),
				new FlexibleHide(),
				new FlexibleHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeDamage],
            }
        )
    }
}

class SuedeHardenedLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "suede",
            [
                new StrongHide(),
				new SoftHide(),
				new SoftHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount],
            }
        )
    }
}
