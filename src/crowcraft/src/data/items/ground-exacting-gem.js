///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { AnimalBlood } from "./animal-blood";
import { BloodOrWater } from "./blood-or-water";
import { BrioletteExactingCutDiamond } from "./briolette-exacting-cut-diamond";
import { BrioletteExactingCutEmerald } from "./briolette-exacting-cut-emerald";
import { BrioletteExactingCutRuby } from "./briolette-exacting-cut-ruby";
import { BrioletteExactingCutSapphire } from "./briolette-exacting-cut-sapphire";
import { BrioletteExactingCutTopaz } from "./briolette-exacting-cut-topaz";
import { CutExactingGem } from "./cut-exacting-gem";
import { GrindingWheel } from "./grinding-wheel";
import { HeartExactingCutBlackSapphire } from "./heart-exacting-cut-black-sapphire";
import { HeartExactingCutBlueTopaz } from "./heart-exacting-cut-blue-topaz";
import { HeartExactingCutDiamond } from "./heart-exacting-cut-diamond";
import { HeartExactingCutEmerald } from "./heart-exacting-cut-emerald";
import { HeartExactingCutFireDiamond } from "./heart-exacting-cut-fire-diamond";
import { HeartExactingCutRuby } from "./heart-exacting-cut-ruby";
import { HeartExactingCutSapphire } from "./heart-exacting-cut-sapphire";
import { HeartExactingCutTopaz } from "./heart-exacting-cut-topaz";
import { TrillionExactingCutDiamond } from "./trillion-exacting-cut-diamond";
import { TrillionExactingCutEmerald } from "./trillion-exacting-cut-emerald";
import { TrillionExactingCutRuby } from "./trillion-exacting-cut-ruby";
import { TrillionExactingCutSapphire } from "./trillion-exacting-cut-sapphire";
import { TrillionExactingCutTopaz } from "./trillion-exacting-cut-topaz";
import { WaterFlask } from "./water-flask";

export class GroundExactingGem extends CustomizableComponent {
    constructor() {
        super(
            "ground exacting gem",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CutExactingGem()),
				new CraftingMaterial(1, new GrindingWheel()),
				new CraftingMaterial(1, new BloodOrWater()),
            ],
            1,
            [
                new BrioletteTopazWaterGroundExactingGemCustomization(),
				new BrioletteEmeraldWaterGroundExactingGemCustomization(),
				new BrioletteRubyWaterGroundExactingGemCustomization(),
				new BrioletteSapphireWaterGroundExactingGemCustomization(),
				new BrioletteDiamondWaterGroundExactingGemCustomization(),
				new BrioletteTopazBloodGroundExactingGemCustomization(),
				new BrioletteEmeraldBloodGroundExactingGemCustomization(),
				new BrioletteRubyBloodGroundExactingGemCustomization(),
				new BrioletteSapphireBloodGroundExactingGemCustomization(),
				new BrioletteDiamondBloodGroundExactingGemCustomization(),
				new HeartTopazWaterGroundExactingGemCustomization(),
				new HeartEmeraldWaterGroundExactingGemCustomization(),
				new HeartRubyWaterGroundExactingGemCustomization(),
				new HeartSapphireWaterGroundExactingGemCustomization(),
				new HeartDiamondWaterGroundExactingGemCustomization(),
				new HeartBlueTopazWaterGroundExactingGemCustomization(),
				new HeartBlackSapphireWaterGroundExactingGemCustomization(),
				new HeartFireDiamondWaterGroundExactingGemCustomization(),
				new HeartTopazBloodGroundExactingGemCustomization(),
				new HeartEmeraldBloodGroundExactingGemCustomization(),
				new HeartRubyBloodGroundExactingGemCustomization(),
				new HeartSapphireBloodGroundExactingGemCustomization(),
				new HeartDiamondBloodGroundExactingGemCustomization(),
				new HeartBlueTopazBloodGroundExactingGemCustomization(),
				new HeartBlackSapphireBloodGroundExactingGemCustomization(),
				new HeartFireDiamondBloodGroundExactingGemCustomization(),
				new TrillionTopazWaterGroundExactingGemCustomization(),
				new TrillionEmeraldWaterGroundExactingGemCustomization(),
				new TrillionRubyWaterGroundExactingGemCustomization(),
				new TrillionSapphireWaterGroundExactingGemCustomization(),
				new TrillionDiamondWaterGroundExactingGemCustomization(),
				new TrillionTopazBloodGroundExactingGemCustomization(),
				new TrillionEmeraldBloodGroundExactingGemCustomization(),
				new TrillionRubyBloodGroundExactingGemCustomization(),
				new TrillionSapphireBloodGroundExactingGemCustomization(),
				new TrillionDiamondBloodGroundExactingGemCustomization(),
            ],
            "grind gemstone"
        );
    }
}

class BrioletteTopazWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette topaz water",
            [
                new BrioletteExactingCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.InCombatStaminaRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.InCombatStaminaRegeneration],
                [Rarities.Rare.name]: [ItemsStats.InCombatStaminaRegeneration],
                [Rarities.Epic.name]: [ItemsStats.InCombatStaminaRegeneration, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.InCombatStaminaRegeneration, ItemsStats.SupportPower],
            }
        )
    }
}

class BrioletteEmeraldWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette emerald water",
            [
                new BrioletteExactingCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Rare.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Epic.name]: [ItemsStats.OutOfCombatHealthRegeneration, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.OutOfCombatHealthRegeneration, ItemsStats.SupportPower],
            }
        )
    }
}

class BrioletteRubyWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette ruby water",
            [
                new BrioletteExactingCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BasicAttackDamage],
                [Rarities.Uncommon.name]: [ItemsStats.BasicAttackDamage],
                [Rarities.Rare.name]: [ItemsStats.BasicAttackDamage],
                [Rarities.Epic.name]: [ItemsStats.BasicAttackDamage, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.BasicAttackDamage, ItemsStats.SupportPower],
            }
        )
    }
}

class BrioletteSapphireWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette sapphire water",
            [
                new BrioletteExactingCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeDamage, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeDamage, ItemsStats.SupportPower],
            }
        )
    }
}

class BrioletteDiamondWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette diamond water",
            [
                new BrioletteExactingCutDiamond(),
				new WaterFlask(),
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

class BrioletteTopazBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette topaz blood",
            [
                new BrioletteExactingCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.InCombatStaminaRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.InCombatStaminaRegeneration],
                [Rarities.Rare.name]: [ItemsStats.InCombatStaminaRegeneration],
                [Rarities.Epic.name]: [ItemsStats.InCombatStaminaRegeneration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.InCombatStaminaRegeneration, ItemsStats.AttackPower],
            }
        )
    }
}

class BrioletteEmeraldBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette emerald blood",
            [
                new BrioletteExactingCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Rare.name]: [ItemsStats.OutOfCombatHealthRegeneration],
                [Rarities.Epic.name]: [ItemsStats.OutOfCombatHealthRegeneration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.OutOfCombatHealthRegeneration, ItemsStats.AttackPower],
            }
        )
    }
}

class BrioletteRubyBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette ruby blood",
            [
                new BrioletteExactingCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BasicAttackDamage],
                [Rarities.Uncommon.name]: [ItemsStats.BasicAttackDamage],
                [Rarities.Rare.name]: [ItemsStats.BasicAttackDamage],
                [Rarities.Epic.name]: [ItemsStats.BasicAttackDamage, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.BasicAttackDamage, ItemsStats.AttackPower],
            }
        )
    }
}

class BrioletteSapphireBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette sapphire blood",
            [
                new BrioletteExactingCutSapphire(),
				new AnimalBlood(),
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

class BrioletteDiamondBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "briolette diamond blood",
            [
                new BrioletteExactingCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.AttackPower],
            }
        )
    }
}

class HeartTopazWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart topaz water",
            [
                new HeartExactingCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BlacksmithingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.BlacksmithingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.BlacksmithingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.BlacksmithingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.BlacksmithingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartEmeraldWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart emerald water",
            [
                new HeartExactingCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.RunemakingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.RunemakingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.RunemakingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.RunemakingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.RunemakingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartRubyWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart ruby water",
            [
                new HeartExactingCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NecromancyExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.NecromancyExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.NecromancyExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.NecromancyExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.NecromancyExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartSapphireWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart sapphire water",
            [
                new HeartExactingCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.WoodworkingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.WoodworkingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.WoodworkingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.WoodworkingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.WoodworkingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartDiamondWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart diamond water",
            [
                new HeartExactingCutDiamond(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.LeatherworkingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.LeatherworkingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.LeatherworkingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.LeatherworkingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.LeatherworkingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartBlueTopazWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart blue topaz water",
            [
                new HeartExactingCutBlueTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.StonemasonryExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.StonemasonryExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.StonemasonryExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.StonemasonryExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.StonemasonryExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartBlackSapphireWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart black sapphire water",
            [
                new HeartExactingCutBlackSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AlchemyExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.AlchemyExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.AlchemyExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.AlchemyExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.AlchemyExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartFireDiamondWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart fire diamond water",
            [
                new HeartExactingCutFireDiamond(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.JewelcraftingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.JewelcraftingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.JewelcraftingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.JewelcraftingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.JewelcraftingExperimentationPoints, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class HeartTopazBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart topaz blood",
            [
                new HeartExactingCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BlacksmithingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.BlacksmithingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.BlacksmithingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.BlacksmithingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.BlacksmithingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartEmeraldBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart emerald blood",
            [
                new HeartExactingCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.RunemakingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.RunemakingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.RunemakingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.RunemakingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.RunemakingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartRubyBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart ruby blood",
            [
                new HeartExactingCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NecromancyExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.NecromancyExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.NecromancyExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.NecromancyExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.NecromancyExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartSapphireBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart sapphire blood",
            [
                new HeartExactingCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.WoodworkingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.WoodworkingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.WoodworkingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.WoodworkingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.WoodworkingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartDiamondBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart diamond blood",
            [
                new HeartExactingCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.LeatherworkingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.LeatherworkingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.LeatherworkingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.LeatherworkingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.LeatherworkingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartBlueTopazBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart blue topaz blood",
            [
                new HeartExactingCutBlueTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.StonemasonryExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.StonemasonryExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.StonemasonryExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.StonemasonryExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.StonemasonryExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartBlackSapphireBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart black sapphire blood",
            [
                new HeartExactingCutBlackSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AlchemyExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.AlchemyExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.AlchemyExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.AlchemyExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.AlchemyExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class HeartFireDiamondBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "heart fire diamond blood",
            [
                new HeartExactingCutFireDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.JewelcraftingExperimentationPoints],
                [Rarities.Uncommon.name]: [ItemsStats.JewelcraftingExperimentationPoints],
                [Rarities.Rare.name]: [ItemsStats.JewelcraftingExperimentationPoints],
                [Rarities.Epic.name]: [ItemsStats.JewelcraftingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.JewelcraftingExperimentationPoints, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class TrillionTopazWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion topaz water",
            [
                new TrillionExactingCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OutOfCombatStaminaRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.OutOfCombatStaminaRegeneration],
                [Rarities.Rare.name]: [ItemsStats.OutOfCombatStaminaRegeneration],
                [Rarities.Epic.name]: [ItemsStats.OutOfCombatStaminaRegeneration, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.OutOfCombatStaminaRegeneration, ItemsStats.SupportPower],
            }
        )
    }
}

class TrillionEmeraldWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion emerald water",
            [
                new TrillionExactingCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestingEfficiency],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestingEfficiency],
                [Rarities.Rare.name]: [ItemsStats.HarvestingEfficiency],
                [Rarities.Epic.name]: [ItemsStats.HarvestingEfficiency, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.HarvestingEfficiency, ItemsStats.SupportPower],
            }
        )
    }
}

class TrillionRubyWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion ruby water",
            [
                new TrillionExactingCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestingDamageAll],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestingDamageAll],
                [Rarities.Rare.name]: [ItemsStats.HarvestingDamageAll],
                [Rarities.Epic.name]: [ItemsStats.HarvestingDamageAll, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.HarvestingDamageAll, ItemsStats.SupportPower],
            }
        )
    }
}

class TrillionSapphireWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion sapphire water",
            [
                new TrillionExactingCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestingAll],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestingAll],
                [Rarities.Rare.name]: [ItemsStats.HarvestingAll],
                [Rarities.Epic.name]: [ItemsStats.HarvestingAll, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.HarvestingAll, ItemsStats.SupportPower],
            }
        )
    }
}

class TrillionDiamondWaterGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion diamond water",
            [
                new TrillionExactingCutDiamond(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SpotWeaknessAll],
                [Rarities.Uncommon.name]: [ItemsStats.SpotWeaknessAll],
                [Rarities.Rare.name]: [ItemsStats.SpotWeaknessAll],
                [Rarities.Epic.name]: [ItemsStats.SpotWeaknessAll, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.SpotWeaknessAll, ItemsStats.SupportPower],
            }
        )
    }
}

class TrillionTopazBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion topaz blood",
            [
                new TrillionExactingCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.OutOfCombatStaminaRegeneration],
                [Rarities.Uncommon.name]: [ItemsStats.OutOfCombatStaminaRegeneration],
                [Rarities.Rare.name]: [ItemsStats.OutOfCombatStaminaRegeneration],
                [Rarities.Epic.name]: [ItemsStats.OutOfCombatStaminaRegeneration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.OutOfCombatStaminaRegeneration, ItemsStats.AttackPower],
            }
        )
    }
}

class TrillionEmeraldBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion emerald blood",
            [
                new TrillionExactingCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestingEfficiency],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestingEfficiency],
                [Rarities.Rare.name]: [ItemsStats.HarvestingEfficiency],
                [Rarities.Epic.name]: [ItemsStats.HarvestingEfficiency, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.HarvestingEfficiency, ItemsStats.AttackPower],
            }
        )
    }
}

class TrillionRubyBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion ruby blood",
            [
                new TrillionExactingCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestingDamageAll],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestingDamageAll],
                [Rarities.Rare.name]: [ItemsStats.HarvestingDamageAll],
                [Rarities.Epic.name]: [ItemsStats.HarvestingDamageAll, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.HarvestingDamageAll, ItemsStats.AttackPower],
            }
        )
    }
}

class TrillionSapphireBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion sapphire blood",
            [
                new TrillionExactingCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.HarvestingAll],
                [Rarities.Uncommon.name]: [ItemsStats.HarvestingAll],
                [Rarities.Rare.name]: [ItemsStats.HarvestingAll],
                [Rarities.Epic.name]: [ItemsStats.HarvestingAll, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.HarvestingAll, ItemsStats.AttackPower],
            }
        )
    }
}

class TrillionDiamondBloodGroundExactingGemCustomization extends Customization {
    constructor() {
        super(
            "trillion diamond blood",
            [
                new TrillionExactingCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SpotWeaknessAll],
                [Rarities.Uncommon.name]: [ItemsStats.SpotWeaknessAll],
                [Rarities.Rare.name]: [ItemsStats.SpotWeaknessAll],
                [Rarities.Epic.name]: [ItemsStats.SpotWeaknessAll, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SpotWeaknessAll, ItemsStats.AttackPower],
            }
        )
    }
}
