import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Hide } from "./hide";
import { DurableHide } from "./durable-hide";
import { FlexibleHide } from "./flexible-hide";
import { SoftHide } from "./soft-hide";
import { ToughHide } from "./tough-hide";
import { StrongHide } from "./strong-hide";
import { LacingSinew } from "./lacing-sinew";

export class StitchedLeather extends CustomizableComponent {
    constructor() {
        super(
            "stitched leather",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(2, new LacingSinew()),
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
                new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AttackPower],
                [Rarities.Uncommon.name]: [ItemsStats.AttackPower],
                [Rarities.Rare.name]: [ItemsStats.AttackPower],
                [Rarities.Epic.name]: [ItemsStats.AttackPower, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.AttackPower, ItemsStats.Stamina]
            }
        )
    }
}

class TopGrainStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "top grain",
            [
                new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(1, new ToughHide()),
				new CraftingMaterial(1, new ToughHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.Stamina],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.Stamina]
            }
        )
    }
}

class SplitGrainStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "split grain",
            [
                new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new DurableHide()),
				new CraftingMaterial(1, new DurableHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AttackPower],
                [Rarities.Uncommon.name]: [ItemsStats.AttackPower],
                [Rarities.Rare.name]: [ItemsStats.AttackPower],
                [Rarities.Epic.name]: [ItemsStats.AttackPower, ItemsStats.Stealth],
                [Rarities.Legendary.name]: [ItemsStats.AttackPower, ItemsStats.Stealth]
            }
        )
    }
}

class BicastStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "bicast",
            [
                new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new FlexibleHide()),
				new CraftingMaterial(1, new FlexibleHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.Perception],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.Perception]
            }
        )
    }
}

class SuedeStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "suede",
            [
                new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AttackPower],
                [Rarities.Uncommon.name]: [ItemsStats.AttackPower],
                [Rarities.Rare.name]: [ItemsStats.AttackPower],
                [Rarities.Epic.name]: [ItemsStats.AttackPower, ItemsStats.Lifesteal],
                [Rarities.Legendary.name]: [ItemsStats.AttackPower, ItemsStats.Lifesteal]
            }
        )
    }
}

class BondedStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "bonded",
            [
                new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new ToughHide()),
				new CraftingMaterial(1, new FlexibleHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower]
            }
        )
    }
}

class GenuineDurableStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine durable",
            [
                new CraftingMaterial(1, new DurableHide()),
				new CraftingMaterial(1, new DurableHide()),
				new CraftingMaterial(1, new DurableHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.AttackPower]
            }
        )
    }
}

class GenuineToughStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine tough",
            [
                new CraftingMaterial(1, new ToughHide()),
				new CraftingMaterial(1, new ToughHide()),
				new CraftingMaterial(1, new ToughHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeDamage, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeDamage, ItemsStats.AttackPower]
            }
        )
    }
}

class GenuineSoftStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine soft",
            [
                new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(1, new SoftHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower]
            }
        )
    }
}

class GenuineStrongStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine strong",
            [
                new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(1, new StrongHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower]
            }
        )
    }
}

class GenuineFlexibleStitchedLeatherCustomization extends Customization {
    constructor() {
        super(
            "genuine flexible",
            [
                new CraftingMaterial(1, new FlexibleHide()),
				new CraftingMaterial(1, new FlexibleHide()),
				new CraftingMaterial(1, new FlexibleHide()),
				new CraftingMaterial(2, new LacingSinew()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.CriticalStrikeDamage],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.CriticalStrikeDamage]
            }
        )
    }
}
    