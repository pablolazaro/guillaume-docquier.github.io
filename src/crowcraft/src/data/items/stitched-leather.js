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

export class StitchedLeather extends CustomizableComponent {
    constructor() {
        super(
            "stitched leather",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new Hide()),
				new CraftingMaterial(3, new Hide()),
				new CraftingMaterial(3, new Hide()),
				new CraftingMaterial(6, new LacingSinew()),
            ],
            1,
            [
                new FullGrainStitchedLeatherCustomization(),
				new TopGrainStitchedLeatherCustomization(),
				new SplitGrainStitchedLeatherCustomization(),
				new BicastStitchedLeatherCustomization(),
				new SuedeStitchedLeatherCustomization(),
				new BondedStitchedLeatherCustomization(),
				new GenuineDurableStitchedLeatherCustomization(),
				new GenuineToughStitchedLeatherCustomization(),
				new GenuineSoftStitchedLeatherCustomization(),
				new GenuineStrongStitchedLeatherCustomization(),
				new GenuineFlexibleStitchedLeatherCustomization(),
            ]
        );
    }
}

class FullGrainStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "full grain",
            [
                new SoftHide(),
				new StrongHide(),
				new StrongHide(),
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

class TopGrainStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "top grain",
            [
                new SoftHide(),
				new ToughHide(),
				new ToughHide(),
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

class SplitGrainStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "split grain",
            [
                new StrongHide(),
				new DurableHide(),
				new DurableHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AttackPower],
                [Rarities.Uncommon.name]: [ItemsStats.AttackPower],
                [Rarities.Rare.name]: [ItemsStats.AttackPower],
                [Rarities.Epic.name]: [ItemsStats.AttackPower, ItemsStats.Stealth],
                [Rarities.Legendary.name]: [ItemsStats.AttackPower, ItemsStats.Stealth],
            }
        )
    }
}

class BicastStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "bicast",
            [
                new StrongHide(),
				new FlexibleHide(),
				new FlexibleHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.Perception],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.Perception],
            }
        )
    }
}

class SuedeStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "suede",
            [
                new StrongHide(),
				new SoftHide(),
				new SoftHide(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AttackPower],
                [Rarities.Uncommon.name]: [ItemsStats.AttackPower],
                [Rarities.Rare.name]: [ItemsStats.AttackPower],
                [Rarities.Epic.name]: [ItemsStats.AttackPower, ItemsStats.Lifesteal],
                [Rarities.Legendary.name]: [ItemsStats.AttackPower, ItemsStats.Lifesteal],
            }
        )
    }
}

class BondedStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "bonded",
            [
                new StrongHide(),
				new ToughHide(),
				new FlexibleHide(),
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

class GenuineDurableStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine durable",
            [
                new DurableHide(),
				new DurableHide(),
				new DurableHide(),
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

class GenuineToughStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine tough",
            [
                new ToughHide(),
				new ToughHide(),
				new ToughHide(),
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

class GenuineSoftStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine soft",
            [
                new SoftHide(),
				new SoftHide(),
				new SoftHide(),
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

class GenuineStrongStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine strong",
            [
                new StrongHide(),
				new StrongHide(),
				new StrongHide(),
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

class GenuineFlexibleStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine flexible",
            [
                new FlexibleHide(),
				new FlexibleHide(),
				new FlexibleHide(),
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
