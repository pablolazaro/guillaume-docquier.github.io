///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { AnimalBlood } from "./animal-blood";
import { BaguetteCutEmerald } from "./baguette-cut-emerald";
import { BaguetteCutRuby } from "./baguette-cut-ruby";
import { BaguetteCutSapphire } from "./baguette-cut-sapphire";
import { BaguetteCutTopaz } from "./baguette-cut-topaz";
import { BloodOrWater } from "./blood-or-water";
import { CutGem } from "./cut-gem";
import { GrindingWheel } from "./grinding-wheel";
import { MarquiseCutDiamond } from "./marquise-cut-diamond";
import { MarquiseCutEmerald } from "./marquise-cut-emerald";
import { MarquiseCutRuby } from "./marquise-cut-ruby";
import { MarquiseCutSapphire } from "./marquise-cut-sapphire";
import { MarquiseCutTopaz } from "./marquise-cut-topaz";
import { OvalCutDiamond } from "./oval-cut-diamond";
import { OvalCutEmerald } from "./oval-cut-emerald";
import { OvalCutRuby } from "./oval-cut-ruby";
import { OvalCutSapphire } from "./oval-cut-sapphire";
import { OvalCutTopaz } from "./oval-cut-topaz";
import { RoundCutDiamond } from "./round-cut-diamond";
import { RoundCutEmerald } from "./round-cut-emerald";
import { RoundCutRuby } from "./round-cut-ruby";
import { RoundCutSapphire } from "./round-cut-sapphire";
import { RoundCutTopaz } from "./round-cut-topaz";
import { SquareCutEmerald } from "./square-cut-emerald";
import { SquareCutRuby } from "./square-cut-ruby";
import { SquareCutSapphire } from "./square-cut-sapphire";
import { SquareCutTopaz } from "./square-cut-topaz";
import { TriangleCutDiamond } from "./triangle-cut-diamond";
import { TriangleCutEmerald } from "./triangle-cut-emerald";
import { TriangleCutRuby } from "./triangle-cut-ruby";
import { TriangleCutSapphire } from "./triangle-cut-sapphire";
import { TriangleCutTopaz } from "./triangle-cut-topaz";
import { WaterFlask } from "./water-flask";

export class GroundGem extends CustomizableComponent {
    constructor() {
        super(
            "ground gem",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CutGem()),
				new CraftingMaterial(1, new GrindingWheel()),
				new CraftingMaterial(1, new BloodOrWater()),
            ],
            1,
            [
                new BaguetteTopazWaterGroundGemCustomization(),
				new BaguetteEmeraldWaterGroundGemCustomization(),
				new BaguetteRubyWaterGroundGemCustomization(),
				new BaguetteSapphireWaterGroundGemCustomization(),
				new BaguetteTopazBloodGroundGemCustomization(),
				new BaguetteEmeraldBloodGroundGemCustomization(),
				new BaguetteRubyBloodGroundGemCustomization(),
				new BaguetteSapphireBloodGroundGemCustomization(),
				new MarquiseTopazWaterGroundGemCustomization(),
				new MarquiseEmeraldWaterGroundGemCustomization(),
				new MarquiseRubyWaterGroundGemCustomization(),
				new MarquiseSapphireWaterGroundGemCustomization(),
				new MarquiseDiamondWaterGroundGemCustomization(),
				new MarquiseTopazBloodGroundGemCustomization(),
				new MarquiseEmeraldBloodGroundGemCustomization(),
				new MarquiseRubyBloodGroundGemCustomization(),
				new MarquiseSapphireBloodGroundGemCustomization(),
				new MarquiseDiamondBloodGroundGemCustomization(),
				new OvalTopazWaterGroundGemCustomization(),
				new OvalEmeraldWaterGroundGemCustomization(),
				new OvalRubyWaterGroundGemCustomization(),
				new OvalSapphireWaterGroundGemCustomization(),
				new OvalDiamondWaterGroundGemCustomization(),
				new OvalTopazBloodGroundGemCustomization(),
				new OvalEmeraldBloodGroundGemCustomization(),
				new OvalRubyBloodGroundGemCustomization(),
				new OvalSapphireBloodGroundGemCustomization(),
				new OvalDiamondBloodGroundGemCustomization(),
				new RoundTopazWaterGroundGemCustomization(),
				new RoundEmeraldWaterGroundGemCustomization(),
				new RoundRubyWaterGroundGemCustomization(),
				new RoundSapphireWaterGroundGemCustomization(),
				new RoundDiamondWaterGroundGemCustomization(),
				new RoundTopazBloodGroundGemCustomization(),
				new RoundEmeraldBloodGroundGemCustomization(),
				new RoundRubyBloodGroundGemCustomization(),
				new RoundSapphireBloodGroundGemCustomization(),
				new RoundDiamondBloodGroundGemCustomization(),
				new SquareTopazWaterGroundGemCustomization(),
				new SquareEmeraldWaterGroundGemCustomization(),
				new SquareRubyWaterGroundGemCustomization(),
				new SquareSapphireWaterGroundGemCustomization(),
				new SquareTopazBloodGroundGemCustomization(),
				new SquareEmeraldBloodGroundGemCustomization(),
				new SquareRubyBloodGroundGemCustomization(),
				new SquareSapphireBloodGroundGemCustomization(),
				new TriangleTopazWaterGroundGemCustomization(),
				new TriangleEmeraldWaterGroundGemCustomization(),
				new TriangleRubyWaterGroundGemCustomization(),
				new TriangleSapphireWaterGroundGemCustomization(),
				new TriangleDiamondWaterGroundGemCustomization(),
				new TriangleTopazBloodGroundGemCustomization(),
				new TriangleEmeraldBloodGroundGemCustomization(),
				new TriangleRubyBloodGroundGemCustomization(),
				new TriangleSapphireBloodGroundGemCustomization(),
				new TriangleDiamondBloodGroundGemCustomization(),
            ],
            "grind gemstone"
        );
    }
}

class BaguetteTopazWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette topaz water",
            [
                new BaguetteCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.RunemakingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.RunemakingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.RunemakingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.RunemakingExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.RunemakingExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class BaguetteEmeraldWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette emerald water",
            [
                new BaguetteCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.JewelcraftingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.JewelcraftingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.JewelcraftingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.JewelcraftingExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.JewelcraftingExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class BaguetteRubyWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette ruby water",
            [
                new BaguetteCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.LeatherworkingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.LeatherworkingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.LeatherworkingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.LeatherworkingExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.LeatherworkingExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class BaguetteSapphireWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette sapphire water",
            [
                new BaguetteCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AlchemyExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.AlchemyExperimentation],
                [Rarities.Rare.name]: [ItemsStats.AlchemyExperimentation],
                [Rarities.Epic.name]: [ItemsStats.AlchemyExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.AlchemyExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class BaguetteTopazBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette topaz blood",
            [
                new BaguetteCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.RunemakingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.RunemakingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.RunemakingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.RunemakingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.RunemakingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class BaguetteEmeraldBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette emerald blood",
            [
                new BaguetteCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.JewelcraftingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.JewelcraftingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.JewelcraftingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.JewelcraftingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.JewelcraftingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class BaguetteRubyBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette ruby blood",
            [
                new BaguetteCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.LeatherworkingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.LeatherworkingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.LeatherworkingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.LeatherworkingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.LeatherworkingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class BaguetteSapphireBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "baguette sapphire blood",
            [
                new BaguetteCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.AlchemyExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.AlchemyExperimentation],
                [Rarities.Rare.name]: [ItemsStats.AlchemyExperimentation],
                [Rarities.Epic.name]: [ItemsStats.AlchemyExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.AlchemyExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class MarquiseTopazWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise topaz water",
            [
                new MarquiseCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Mining],
                [Rarities.Uncommon.name]: [ItemsStats.Mining],
                [Rarities.Rare.name]: [ItemsStats.Mining],
                [Rarities.Epic.name]: [ItemsStats.Mining, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Mining, ItemsStats.HealingBonus],
            }
        )
    }
}

class MarquiseEmeraldWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise emerald water",
            [
                new MarquiseCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Quarrying],
                [Rarities.Uncommon.name]: [ItemsStats.Quarrying],
                [Rarities.Rare.name]: [ItemsStats.Quarrying],
                [Rarities.Epic.name]: [ItemsStats.Quarrying, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Quarrying, ItemsStats.HealingBonus],
            }
        )
    }
}

class MarquiseRubyWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise ruby water",
            [
                new MarquiseCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Skinning],
                [Rarities.Uncommon.name]: [ItemsStats.Skinning],
                [Rarities.Rare.name]: [ItemsStats.Skinning],
                [Rarities.Epic.name]: [ItemsStats.Skinning, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Skinning, ItemsStats.HealingBonus],
            }
        )
    }
}

class MarquiseSapphireWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise sapphire water",
            [
                new MarquiseCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Logging],
                [Rarities.Uncommon.name]: [ItemsStats.Logging],
                [Rarities.Rare.name]: [ItemsStats.Logging],
                [Rarities.Epic.name]: [ItemsStats.Logging, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Logging, ItemsStats.HealingBonus],
            }
        )
    }
}

class MarquiseDiamondWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise diamond water",
            [
                new MarquiseCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Digging],
                [Rarities.Uncommon.name]: [ItemsStats.Digging],
                [Rarities.Rare.name]: [ItemsStats.Digging],
                [Rarities.Epic.name]: [ItemsStats.Digging, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Digging, ItemsStats.HealingBonus],
            }
        )
    }
}

class MarquiseTopazBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise topaz blood",
            [
                new MarquiseCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Mining],
                [Rarities.Uncommon.name]: [ItemsStats.Mining],
                [Rarities.Rare.name]: [ItemsStats.Mining],
                [Rarities.Epic.name]: [ItemsStats.Mining, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Mining, ItemsStats.DamageBonus],
            }
        )
    }
}

class MarquiseEmeraldBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise emerald blood",
            [
                new MarquiseCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Quarrying],
                [Rarities.Uncommon.name]: [ItemsStats.Quarrying],
                [Rarities.Rare.name]: [ItemsStats.Quarrying],
                [Rarities.Epic.name]: [ItemsStats.Quarrying, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Quarrying, ItemsStats.DamageBonus],
            }
        )
    }
}

class MarquiseRubyBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise ruby blood",
            [
                new MarquiseCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Skinning],
                [Rarities.Uncommon.name]: [ItemsStats.Skinning],
                [Rarities.Rare.name]: [ItemsStats.Skinning],
                [Rarities.Epic.name]: [ItemsStats.Skinning, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Skinning, ItemsStats.DamageBonus],
            }
        )
    }
}

class MarquiseSapphireBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise sapphire blood",
            [
                new MarquiseCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Logging],
                [Rarities.Uncommon.name]: [ItemsStats.Logging],
                [Rarities.Rare.name]: [ItemsStats.Logging],
                [Rarities.Epic.name]: [ItemsStats.Logging, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Logging, ItemsStats.DamageBonus],
            }
        )
    }
}

class MarquiseDiamondBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "marquise diamond blood",
            [
                new MarquiseCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Digging],
                [Rarities.Uncommon.name]: [ItemsStats.Digging],
                [Rarities.Rare.name]: [ItemsStats.Digging],
                [Rarities.Epic.name]: [ItemsStats.Digging, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Digging, ItemsStats.DamageBonus],
            }
        )
    }
}

class OvalTopazWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval topaz water",
            [
                new OvalCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.HealingBonus],
            }
        )
    }
}

class OvalEmeraldWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval emerald water",
            [
                new OvalCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PowerDamageBonusRanged],
                [Rarities.Uncommon.name]: [ItemsStats.PowerDamageBonusRanged],
                [Rarities.Rare.name]: [ItemsStats.PowerDamageBonusRanged],
                [Rarities.Epic.name]: [ItemsStats.PowerDamageBonusRanged, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.PowerDamageBonusRanged, ItemsStats.HealingBonus],
            }
        )
    }
}

class OvalRubyWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval ruby water",
            [
                new OvalCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingChance, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingChance, ItemsStats.HealingBonus],
            }
        )
    }
}

class OvalSapphireWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval sapphire water",
            [
                new OvalCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PowerDamageBonusMelee],
                [Rarities.Uncommon.name]: [ItemsStats.PowerDamageBonusMelee],
                [Rarities.Rare.name]: [ItemsStats.PowerDamageBonusMelee],
                [Rarities.Epic.name]: [ItemsStats.PowerDamageBonusMelee, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.PowerDamageBonusMelee, ItemsStats.HealingBonus],
            }
        )
    }
}

class OvalDiamondWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval diamond water",
            [
                new OvalCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stealth],
                [Rarities.Uncommon.name]: [ItemsStats.Stealth],
                [Rarities.Rare.name]: [ItemsStats.Stealth],
                [Rarities.Epic.name]: [ItemsStats.Stealth, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Stealth, ItemsStats.HealingBonus],
            }
        )
    }
}

class OvalTopazBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval topaz blood",
            [
                new OvalCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrikeChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrikeChance, ItemsStats.DamageBonus],
            }
        )
    }
}

class OvalEmeraldBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval emerald blood",
            [
                new OvalCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PowerDamageBonusRanged],
                [Rarities.Uncommon.name]: [ItemsStats.PowerDamageBonusRanged],
                [Rarities.Rare.name]: [ItemsStats.PowerDamageBonusRanged],
                [Rarities.Epic.name]: [ItemsStats.PowerDamageBonusRanged, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PowerDamageBonusRanged, ItemsStats.DamageBonus],
            }
        )
    }
}

class OvalRubyBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval ruby blood",
            [
                new OvalCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingChance, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingChance, ItemsStats.DamageBonus],
            }
        )
    }
}

class OvalSapphireBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval sapphire blood",
            [
                new OvalCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PowerDamageBonusMelee],
                [Rarities.Uncommon.name]: [ItemsStats.PowerDamageBonusMelee],
                [Rarities.Rare.name]: [ItemsStats.PowerDamageBonusMelee],
                [Rarities.Epic.name]: [ItemsStats.PowerDamageBonusMelee, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PowerDamageBonusMelee, ItemsStats.DamageBonus],
            }
        )
    }
}

class OvalDiamondBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "oval diamond blood",
            [
                new OvalCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stealth],
                [Rarities.Uncommon.name]: [ItemsStats.Stealth],
                [Rarities.Rare.name]: [ItemsStats.Stealth],
                [Rarities.Epic.name]: [ItemsStats.Stealth, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Stealth, ItemsStats.DamageBonus],
            }
        )
    }
}

class RoundTopazWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round topaz water",
            [
                new RoundCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessOre],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessOre],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessOre],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessOre, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessOre, ItemsStats.HealingBonus],
            }
        )
    }
}

class RoundEmeraldWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round emerald water",
            [
                new RoundCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessStone],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessStone],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessStone],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessStone, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessStone, ItemsStats.HealingBonus],
            }
        )
    }
}

class RoundRubyWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round ruby water",
            [
                new RoundCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessAnimal],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessAnimal],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessAnimal],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessAnimal, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessAnimal, ItemsStats.HealingBonus],
            }
        )
    }
}

class RoundSapphireWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round sapphire water",
            [
                new RoundCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessWood],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessWood],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessWood],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessWood, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessWood, ItemsStats.HealingBonus],
            }
        )
    }
}

class RoundDiamondWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round diamond water",
            [
                new RoundCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessGrave],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessGrave],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessGrave],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessGrave, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessGrave, ItemsStats.HealingBonus],
            }
        )
    }
}

class RoundTopazBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round topaz blood",
            [
                new RoundCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessOre],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessOre],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessOre],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessOre, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessOre, ItemsStats.DamageBonus],
            }
        )
    }
}

class RoundEmeraldBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round emerald blood",
            [
                new RoundCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessStone],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessStone],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessStone],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessStone, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessStone, ItemsStats.DamageBonus],
            }
        )
    }
}

class RoundRubyBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round ruby blood",
            [
                new RoundCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessAnimal],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessAnimal],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessAnimal],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessAnimal, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessAnimal, ItemsStats.DamageBonus],
            }
        )
    }
}

class RoundSapphireBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round sapphire blood",
            [
                new RoundCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessWood],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessWood],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessWood],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessWood, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessWood, ItemsStats.DamageBonus],
            }
        )
    }
}

class RoundDiamondBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "round diamond blood",
            [
                new RoundCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ExploitWeaknessGrave],
                [Rarities.Uncommon.name]: [ItemsStats.ExploitWeaknessGrave],
                [Rarities.Rare.name]: [ItemsStats.ExploitWeaknessGrave],
                [Rarities.Epic.name]: [ItemsStats.ExploitWeaknessGrave, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ExploitWeaknessGrave, ItemsStats.DamageBonus],
            }
        )
    }
}

class SquareTopazWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square topaz water",
            [
                new SquareCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BlacksmithingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.BlacksmithingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.BlacksmithingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.BlacksmithingExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.BlacksmithingExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class SquareEmeraldWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square emerald water",
            [
                new SquareCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.StonemasonryExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.StonemasonryExperimentation],
                [Rarities.Rare.name]: [ItemsStats.StonemasonryExperimentation],
                [Rarities.Epic.name]: [ItemsStats.StonemasonryExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.StonemasonryExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class SquareRubyWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square ruby water",
            [
                new SquareCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NecromancyExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.NecromancyExperimentation],
                [Rarities.Rare.name]: [ItemsStats.NecromancyExperimentation],
                [Rarities.Epic.name]: [ItemsStats.NecromancyExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.NecromancyExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class SquareSapphireWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square sapphire water",
            [
                new SquareCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.WoodworkingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.WoodworkingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.WoodworkingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.WoodworkingExperimentation, ItemsStats.AssemblyDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.WoodworkingExperimentation, ItemsStats.AssemblyDifficultyReduction],
            }
        )
    }
}

class SquareTopazBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square topaz blood",
            [
                new SquareCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BlacksmithingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.BlacksmithingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.BlacksmithingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.BlacksmithingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.BlacksmithingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class SquareEmeraldBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square emerald blood",
            [
                new SquareCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.StonemasonryExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.StonemasonryExperimentation],
                [Rarities.Rare.name]: [ItemsStats.StonemasonryExperimentation],
                [Rarities.Epic.name]: [ItemsStats.StonemasonryExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.StonemasonryExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class SquareRubyBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square ruby blood",
            [
                new SquareCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NecromancyExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.NecromancyExperimentation],
                [Rarities.Rare.name]: [ItemsStats.NecromancyExperimentation],
                [Rarities.Epic.name]: [ItemsStats.NecromancyExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.NecromancyExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class SquareSapphireBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "square sapphire blood",
            [
                new SquareCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.WoodworkingExperimentation],
                [Rarities.Uncommon.name]: [ItemsStats.WoodworkingExperimentation],
                [Rarities.Rare.name]: [ItemsStats.WoodworkingExperimentation],
                [Rarities.Epic.name]: [ItemsStats.WoodworkingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
                [Rarities.Legendary.name]: [ItemsStats.WoodworkingExperimentation, ItemsStats.ExperimentationDifficultyReduction],
            }
        )
    }
}

class TriangleTopazWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle topaz water",
            [
                new TriangleCutTopaz(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PersonalHealingModifier],
                [Rarities.Uncommon.name]: [ItemsStats.PersonalHealingModifier],
                [Rarities.Rare.name]: [ItemsStats.PersonalHealingModifier],
                [Rarities.Epic.name]: [ItemsStats.PersonalHealingModifier, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.PersonalHealingModifier, ItemsStats.HealingBonus],
            }
        )
    }
}

class TriangleEmeraldWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle emerald water",
            [
                new TriangleCutEmerald(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElementalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElementalResistance],
                [Rarities.Rare.name]: [ItemsStats.ElementalResistance],
                [Rarities.Epic.name]: [ItemsStats.ElementalResistance, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.ElementalResistance, ItemsStats.HealingBonus],
            }
        )
    }
}

class TriangleRubyWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle ruby water",
            [
                new TriangleCutRuby(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.RangedDistanceBonus],
                [Rarities.Uncommon.name]: [ItemsStats.RangedDistanceBonus],
                [Rarities.Rare.name]: [ItemsStats.RangedDistanceBonus],
                [Rarities.Epic.name]: [ItemsStats.RangedDistanceBonus, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.RangedDistanceBonus, ItemsStats.HealingBonus],
            }
        )
    }
}

class TriangleSapphireWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle sapphire water",
            [
                new TriangleCutSapphire(),
				new WaterFlask(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Rare.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Epic.name]: [ItemsStats.PhysicalResistance, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.PhysicalResistance, ItemsStats.HealingBonus],
            }
        )
    }
}

class TriangleDiamondWaterGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle diamond water",
            [
                new TriangleCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Perception],
                [Rarities.Uncommon.name]: [ItemsStats.Perception],
                [Rarities.Rare.name]: [ItemsStats.Perception],
                [Rarities.Epic.name]: [ItemsStats.Perception, ItemsStats.HealingBonus],
                [Rarities.Legendary.name]: [ItemsStats.Perception, ItemsStats.HealingBonus],
            }
        )
    }
}

class TriangleTopazBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle topaz blood",
            [
                new TriangleCutTopaz(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PersonalHealingModifier],
                [Rarities.Uncommon.name]: [ItemsStats.PersonalHealingModifier],
                [Rarities.Rare.name]: [ItemsStats.PersonalHealingModifier],
                [Rarities.Epic.name]: [ItemsStats.PersonalHealingModifier, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PersonalHealingModifier, ItemsStats.DamageBonus],
            }
        )
    }
}

class TriangleEmeraldBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle emerald blood",
            [
                new TriangleCutEmerald(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElementalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElementalResistance],
                [Rarities.Rare.name]: [ItemsStats.ElementalResistance],
                [Rarities.Epic.name]: [ItemsStats.ElementalResistance, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.ElementalResistance, ItemsStats.DamageBonus],
            }
        )
    }
}

class TriangleRubyBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle ruby blood",
            [
                new TriangleCutRuby(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.RangedDistanceBonus],
                [Rarities.Uncommon.name]: [ItemsStats.RangedDistanceBonus],
                [Rarities.Rare.name]: [ItemsStats.RangedDistanceBonus],
                [Rarities.Epic.name]: [ItemsStats.RangedDistanceBonus, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.RangedDistanceBonus, ItemsStats.DamageBonus],
            }
        )
    }
}

class TriangleSapphireBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle sapphire blood",
            [
                new TriangleCutSapphire(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Rare.name]: [ItemsStats.PhysicalResistance],
                [Rarities.Epic.name]: [ItemsStats.PhysicalResistance, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PhysicalResistance, ItemsStats.DamageBonus],
            }
        )
    }
}

class TriangleDiamondBloodGroundGemCustomization extends Customization {
    constructor() {
        super(
            "triangle diamond blood",
            [
                new TriangleCutDiamond(),
				new AnimalBlood(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Perception],
                [Rarities.Uncommon.name]: [ItemsStats.Perception],
                [Rarities.Rare.name]: [ItemsStats.Perception],
                [Rarities.Epic.name]: [ItemsStats.Perception, ItemsStats.DamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.Perception, ItemsStats.DamageBonus],
            }
        )
    }
}
