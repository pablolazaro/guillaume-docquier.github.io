///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { Rarities } from "./rarities";
import { CustomizationEffect } from "./item";

class ItemStat {
    constructor(name, valuesByRarity) {
        this.name = name;
        this.valuesByRarity = valuesByRarity;
    }

    getEffect(rarity) {
        return new CustomizationEffect(this.name, this.valuesByRarity[rarity.name]);
    }
}

class AttackPower extends ItemStat {
    constructor() {
        super(
            "attack power",
            {
                [Rarities.Common.name]: 0.86,
                [Rarities.Uncommon.name]: 0.98,
                [Rarities.Rare.name]: 1.06,
                [Rarities.Epic.name]: 1.145,
                [Rarities.Legendary.name]: 1.23,
            }
        );
    }
}

class PhysicalResistance extends ItemStat {
    constructor() {
        super(
            "physical resistance",
            {
                [Rarities.Common.name]: 6.04,
                [Rarities.Uncommon.name]: 6.87,
                [Rarities.Rare.name]: 7.43,
                [Rarities.Epic.name]: 8.01,
                [Rarities.Legendary.name]: 8.6,
            }
        );
    }
}

class ElementalResistance extends ItemStat {
    constructor() {
        super(
            "elemental resistance",
            {
                [Rarities.Common.name]: 6.04,
                [Rarities.Uncommon.name]: 6.87,
                [Rarities.Rare.name]: 7.43,
                [Rarities.Epic.name]: 8.01,
                [Rarities.Legendary.name]: 8.6,
            }
        );
    }
}

class OrganicResistance extends ItemStat {
    constructor() {
        super(
            "organic resistance",
            {
                [Rarities.Common.name]: 6.04,
                [Rarities.Uncommon.name]: 6.87,
                [Rarities.Rare.name]: 7.43,
                [Rarities.Epic.name]: 8.01,
                [Rarities.Legendary.name]: 8.6,
            }
        );
    }
}

class SupportPower extends ItemStat {
    constructor() {
        super(
            "support power",
            {
                [Rarities.Common.name]: 1.72,
                [Rarities.Uncommon.name]: 1.96,
                [Rarities.Rare.name]: 2.12,
                [Rarities.Epic.name]: 2.29,
                [Rarities.Legendary.name]: 2.46,
            }
        );
    }
}

class CriticalStrikeChance extends ItemStat {
    constructor() {
        super(
            "critical strike chance",
            {
                [Rarities.Common.name]: 0.03,
                [Rarities.Uncommon.name]: 0.04,
                [Rarities.Rare.name]: 0.05,
                [Rarities.Epic.name]: 0.06,
                [Rarities.Legendary.name]: 0.07,
            }
        );
    }
}

class CriticalStrikeDamage extends ItemStat {
    constructor() {
        super(
            "critical strike damage",
            {
                [Rarities.Common.name]: 0.17,
                [Rarities.Uncommon.name]: 0.19,
                [Rarities.Rare.name]: 0.21,
                [Rarities.Epic.name]: 0.23,
                [Rarities.Legendary.name]: 0.25,
            }
        );
    }
}

class FireArmorPenetration extends ItemStat {
    constructor() {
        super(
            "fire armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class IceArmorPenetration extends ItemStat {
    constructor() {
        super(
            "ice armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class ElectricityArmorPenetration extends ItemStat {
    constructor() {
        super(
            "electricity armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class NatureArmorPenetration extends ItemStat {
    constructor() {
        super(
            "nature armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class SlashingArmorPenetration extends ItemStat {
    constructor() {
        super(
            "slashing armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class CrushingArmorPenetration extends ItemStat {
    constructor() {
        super(
            "crushing armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class PiercingArmorPenetration extends ItemStat {
    constructor() {
        super(
            "piercing armor penetration",
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12,
            }
        );
    }
}

class CriticalHealingChance extends ItemStat {
    constructor() {
        super(
            "critical healing chance",
            {
                [Rarities.Common.name]: 0.03,
                [Rarities.Uncommon.name]: 0.04,
                [Rarities.Rare.name]: 0.05,
                [Rarities.Epic.name]: 0.06,
                [Rarities.Legendary.name]: 0.07,
            }
        );
    }
}

class CriticalHealingAmount extends ItemStat {
    constructor() {
        super(
            "critical healing amount",
            {
                [Rarities.Common.name]: 0.17,
                [Rarities.Uncommon.name]: 0.19,
                [Rarities.Rare.name]: 0.21,
                [Rarities.Epic.name]: 0.23,
                [Rarities.Legendary.name]: 0.25,
            }
        );
    }
}

class Stamina extends ItemStat {
    constructor() {
        super(
            "stamina",
            {
                [Rarities.Common.name]: 0.69,
                [Rarities.Uncommon.name]: 0.79,
                [Rarities.Rare.name]: 0.85,
                [Rarities.Epic.name]: 0.91,
                [Rarities.Legendary.name]: 0.98,
            }
        );
    }
}

class OutOfCombatHealthRegeneration extends ItemStat {
    constructor() {
        super(
            "out of combat health regeneration",
            {
                [Rarities.Common.name]: 0.59,
                [Rarities.Uncommon.name]: 0.67,
                [Rarities.Rare.name]: 0.71,
                [Rarities.Epic.name]: 0.76,
                [Rarities.Legendary.name]: 0.8,
            }
        );
    }
}

class Stealth extends ItemStat {
    constructor() {
        super(
            "stealth",
            {
                [Rarities.Common.name]: 0.3,
                [Rarities.Uncommon.name]: 0.34,
                [Rarities.Rare.name]: 0.37,
                [Rarities.Epic.name]: 0.4,
                [Rarities.Legendary.name]: 0.43,
            }
        );
    }
}

class BleedResistance extends ItemStat {
    constructor() {
        super(
            "bleed resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class FireResistance extends ItemStat {
    constructor() {
        super(
            "fire resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class IceResistance extends ItemStat {
    constructor() {
        super(
            "ice resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class ElectricityResistance extends ItemStat {
    constructor() {
        super(
            "electricity resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class NatureResistance extends ItemStat {
    constructor() {
        super(
            "nature resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class PoisonResistance extends ItemStat {
    constructor() {
        super(
            "poison resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class DiseaseResistance extends ItemStat {
    constructor() {
        super(
            "disease resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class SlashingResistance extends ItemStat {
    constructor() {
        super(
            "slashing resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class CrushingResistance extends ItemStat {
    constructor() {
        super(
            "crushing resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class PiercingResistance extends ItemStat {
    constructor() {
        super(
            "piercing resistance",
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 8.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24,
            }
        );
    }
}

class BleedDamageBonus extends ItemStat {
    constructor() {
        super(
            "bleed damage bonus",
            {
                [Rarities.Common.name]: 0.15,
                [Rarities.Uncommon.name]: 0.17,
                [Rarities.Rare.name]: 0.18,
                [Rarities.Epic.name]: 0.19,
                [Rarities.Legendary.name]: 0.2,
            }
        );
    }
}

class FireDamageBonus extends ItemStat {
    constructor() {
        super(
            "fire damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class IceDamageBonus extends ItemStat {
    constructor() {
        super(
            "ice damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class ElectricityDamageBonus extends ItemStat {
    constructor() {
        super(
            "electricity damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class NatureDamageBonus extends ItemStat {
    constructor() {
        super(
            "nature damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class PoisonDamageBonus extends ItemStat {
    constructor() {
        super(
            "poison damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class DiseaseDamageBonus extends ItemStat {
    constructor() {
        super(
            "disease damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class SlashingDamageBonus extends ItemStat {
    constructor() {
        super(
            "slashing damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class CrushingDamageBonus extends ItemStat {
    constructor() {
        super(
            "crushing damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class PiercingDamageBonus extends ItemStat {
    constructor() {
        super(
            "piercing damage bonus",
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48,
            }
        );
    }
}

class Perception extends ItemStat {
    constructor() {
        super(
            "perception",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0.34,
                [Rarities.Legendary.name]: 0.37,
            }
        );
    }
}

class LifestealBonus extends ItemStat {
    constructor() {
        super(
            "lifesteal bonus",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0.46,
                [Rarities.Legendary.name]: 0.49,
            }
        );
    }
}

class FireDamageType extends ItemStat {
    constructor() {
        super(
            "fire damage type",
            {
                [Rarities.Common.name]: 1,
                [Rarities.Uncommon.name]: 1,
                [Rarities.Rare.name]: 1,
                [Rarities.Epic.name]: 1,
                [Rarities.Legendary.name]: 1,
            }
        );
    }
}

class IceDamageType extends ItemStat {
    constructor() {
        super(
            "ice damage type",
            {
                [Rarities.Common.name]: 1,
                [Rarities.Uncommon.name]: 1,
                [Rarities.Rare.name]: 1,
                [Rarities.Epic.name]: 1,
                [Rarities.Legendary.name]: 1,
            }
        );
    }
}

class SlashingDamageType extends ItemStat {
    constructor() {
        super(
            "slashing damage type",
            {
                [Rarities.Common.name]: 1,
                [Rarities.Uncommon.name]: 1,
                [Rarities.Rare.name]: 1,
                [Rarities.Epic.name]: 1,
                [Rarities.Legendary.name]: 1,
            }
        );
    }
}

class CrushingDamageType extends ItemStat {
    constructor() {
        super(
            "crushing damage type",
            {
                [Rarities.Common.name]: 1,
                [Rarities.Uncommon.name]: 1,
                [Rarities.Rare.name]: 1,
                [Rarities.Epic.name]: 1,
                [Rarities.Legendary.name]: 1,
            }
        );
    }
}

class PiercingDamageType extends ItemStat {
    constructor() {
        super(
            "piercing damage type",
            {
                [Rarities.Common.name]: 1,
                [Rarities.Uncommon.name]: 1,
                [Rarities.Rare.name]: 1,
                [Rarities.Epic.name]: 1,
                [Rarities.Legendary.name]: 1,
            }
        );
    }
}

class BeneficialHarvestChance extends ItemStat {
    constructor() {
        super(
            "beneficial harvest chance",
            {
                [Rarities.Common.name]: 0.0625,
                [Rarities.Uncommon.name]: 0.0688,
                [Rarities.Rare.name]: 0.0719,
                [Rarities.Epic.name]: 0.075,
                [Rarities.Legendary.name]: 0.0781,
            }
        );
    }
}

class HarvestCriticalChance extends ItemStat {
    constructor() {
        super(
            "harvest critical chance",
            {
                [Rarities.Common.name]: 0.075,
                [Rarities.Uncommon.name]: 0.0825,
                [Rarities.Rare.name]: 0.0863,
                [Rarities.Epic.name]: 0.09,
                [Rarities.Legendary.name]: 0.0938,
            }
        );
    }
}

class PlethoraOfDust extends ItemStat {
    constructor() {
        super(
            "plethora of dust",
            {
                [Rarities.Common.name]: 0.075,
                [Rarities.Uncommon.name]: 0.0825,
                [Rarities.Rare.name]: 0.0863,
                [Rarities.Epic.name]: 0.09,
                [Rarities.Legendary.name]: 0.0938,
            }
        );
    }
}

class BonusHarvestChance extends ItemStat {
    constructor() {
        super(
            "bonus harvest chance",
            {
                [Rarities.Common.name]: 0.15,
                [Rarities.Uncommon.name]: 0.165,
                [Rarities.Rare.name]: 0.1725,
                [Rarities.Epic.name]: 0.18,
                [Rarities.Legendary.name]: 0.1875,
            }
        );
    }
}

class Strength extends ItemStat {
    constructor() {
        super(
            "strength",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Constitution extends ItemStat {
    constructor() {
        super(
            "constitution",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Intellect extends ItemStat {
    constructor() {
        super(
            "intellect",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Dexterity extends ItemStat {
    constructor() {
        super(
            "dexterity",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Spirit extends ItemStat {
    constructor() {
        super(
            "spirit",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class InCombatStaminaRegeneration extends ItemStat {
    constructor() {
        super(
            "in combat stamina regeneration",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class BasicAttackDamage extends ItemStat {
    constructor() {
        super(
            "basic attack damage",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class AssemblyDifficultyReduction extends ItemStat {
    constructor() {
        super(
            "assembly difficulty reduction",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ExperimentationDifficultyReduction extends ItemStat {
    constructor() {
        super(
            "experimentation difficulty reduction",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class RunemakingExperimentation extends ItemStat {
    constructor() {
        super(
            "runemaking experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class JewelcraftingExperimentation extends ItemStat {
    constructor() {
        super(
            "jewelcrafting experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class LeatherworkingExperimentation extends ItemStat {
    constructor() {
        super(
            "leatherworking experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class AlchemyExperimentation extends ItemStat {
    constructor() {
        super(
            "alchemy experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class HealingBonus extends ItemStat {
    constructor() {
        super(
            "healing bonus",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class DamageBonus extends ItemStat {
    constructor() {
        super(
            "damage bonus",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Mining extends ItemStat {
    constructor() {
        super(
            "mining",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Quarrying extends ItemStat {
    constructor() {
        super(
            "quarrying",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Skinning extends ItemStat {
    constructor() {
        super(
            "skinning",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Logging extends ItemStat {
    constructor() {
        super(
            "logging",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class Digging extends ItemStat {
    constructor() {
        super(
            "digging",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class IceFormationChance extends ItemStat {
    constructor() {
        super(
            "ice formation chance",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class DexterityCap extends ItemStat {
    constructor() {
        super(
            "dexterity cap",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class IntellectCap extends ItemStat {
    constructor() {
        super(
            "intellect cap",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class SpiritCap extends ItemStat {
    constructor() {
        super(
            "spirit cap",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class StrengthCap extends ItemStat {
    constructor() {
        super(
            "strength cap",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ConstitutionCap extends ItemStat {
    constructor() {
        super(
            "constitution cap",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ExploitWeaknessOre extends ItemStat {
    constructor() {
        super(
            "exploit weakness: ore",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ExploitWeaknessStone extends ItemStat {
    constructor() {
        super(
            "exploit weakness: stone",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ExploitWeaknessAnimal extends ItemStat {
    constructor() {
        super(
            "exploit weakness: animal",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ExploitWeaknessWood extends ItemStat {
    constructor() {
        super(
            "exploit weakness: wood",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class ExploitWeaknessGrave extends ItemStat {
    constructor() {
        super(
            "exploit weakness: grave",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class PowerDamageBonusRanged extends ItemStat {
    constructor() {
        super(
            "power damage bonus: ranged",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class PowerDamageBonusMelee extends ItemStat {
    constructor() {
        super(
            "power damage bonus: melee",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class BlacksmithingExperimentation extends ItemStat {
    constructor() {
        super(
            "blacksmithing experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class StonemasonryExperimentation extends ItemStat {
    constructor() {
        super(
            "stonemasonry experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class NecromancyExperimentation extends ItemStat {
    constructor() {
        super(
            "necromancy experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class WoodworkingExperimentation extends ItemStat {
    constructor() {
        super(
            "woodworking experimentation",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class BlacksmithingExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "blacksmithing experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class RunemakingExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "runemaking experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class NecromancyExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "necromancy experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class WoodworkingExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "woodworking experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class LeatherworkingExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "leatherworking experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class StonemasonryExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "stonemasonry experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class AlchemyExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "alchemy experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class JewelcraftingExperimentationPoints extends ItemStat {
    constructor() {
        super(
            "jewelcrafting experimentation points",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class OutOfCombatStaminaRegeneration extends ItemStat {
    constructor() {
        super(
            "out of combat stamina regeneration",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class HarvestingEfficiency extends ItemStat {
    constructor() {
        super(
            "harvesting efficiency",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class HarvestingDamageAll extends ItemStat {
    constructor() {
        super(
            "harvesting damage: all",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class HarvestingAll extends ItemStat {
    constructor() {
        super(
            "harvesting: all",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class SpotWeaknessAll extends ItemStat {
    constructor() {
        super(
            "spot weakness: all",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class PersonalHealingModifier extends ItemStat {
    constructor() {
        super(
            "personal healing modifier",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

class RangedDistanceBonus extends ItemStat {
    constructor() {
        super(
            "ranged distance bonus",
            {
                [Rarities.Common.name]: 0,
                [Rarities.Uncommon.name]: 0,
                [Rarities.Rare.name]: 0,
                [Rarities.Epic.name]: 0,
                [Rarities.Legendary.name]: 0,
            }
        );
    }
}

export const ItemsStats = {
    AttackPower: new AttackPower(),
	PhysicalResistance: new PhysicalResistance(),
	ElementalResistance: new ElementalResistance(),
	OrganicResistance: new OrganicResistance(),
	SupportPower: new SupportPower(),
	CriticalStrikeChance: new CriticalStrikeChance(),
	CriticalStrikeDamage: new CriticalStrikeDamage(),
	FireArmorPenetration: new FireArmorPenetration(),
	IceArmorPenetration: new IceArmorPenetration(),
	ElectricityArmorPenetration: new ElectricityArmorPenetration(),
	NatureArmorPenetration: new NatureArmorPenetration(),
	SlashingArmorPenetration: new SlashingArmorPenetration(),
	CrushingArmorPenetration: new CrushingArmorPenetration(),
	PiercingArmorPenetration: new PiercingArmorPenetration(),
	CriticalHealingChance: new CriticalHealingChance(),
	CriticalHealingAmount: new CriticalHealingAmount(),
	Stamina: new Stamina(),
	OutOfCombatHealthRegeneration: new OutOfCombatHealthRegeneration(),
	Stealth: new Stealth(),
	BleedResistance: new BleedResistance(),
	FireResistance: new FireResistance(),
	IceResistance: new IceResistance(),
	ElectricityResistance: new ElectricityResistance(),
	NatureResistance: new NatureResistance(),
	PoisonResistance: new PoisonResistance(),
	DiseaseResistance: new DiseaseResistance(),
	SlashingResistance: new SlashingResistance(),
	CrushingResistance: new CrushingResistance(),
	PiercingResistance: new PiercingResistance(),
	BleedDamageBonus: new BleedDamageBonus(),
	FireDamageBonus: new FireDamageBonus(),
	IceDamageBonus: new IceDamageBonus(),
	ElectricityDamageBonus: new ElectricityDamageBonus(),
	NatureDamageBonus: new NatureDamageBonus(),
	PoisonDamageBonus: new PoisonDamageBonus(),
	DiseaseDamageBonus: new DiseaseDamageBonus(),
	SlashingDamageBonus: new SlashingDamageBonus(),
	CrushingDamageBonus: new CrushingDamageBonus(),
	PiercingDamageBonus: new PiercingDamageBonus(),
	Perception: new Perception(),
	LifestealBonus: new LifestealBonus(),
	FireDamageType: new FireDamageType(),
	IceDamageType: new IceDamageType(),
	SlashingDamageType: new SlashingDamageType(),
	CrushingDamageType: new CrushingDamageType(),
	PiercingDamageType: new PiercingDamageType(),
	BeneficialHarvestChance: new BeneficialHarvestChance(),
	HarvestCriticalChance: new HarvestCriticalChance(),
	PlethoraOfDust: new PlethoraOfDust(),
	BonusHarvestChance: new BonusHarvestChance(),
	Strength: new Strength(),
	Constitution: new Constitution(),
	Intellect: new Intellect(),
	Dexterity: new Dexterity(),
	Spirit: new Spirit(),
	InCombatStaminaRegeneration: new InCombatStaminaRegeneration(),
	BasicAttackDamage: new BasicAttackDamage(),
	AssemblyDifficultyReduction: new AssemblyDifficultyReduction(),
	ExperimentationDifficultyReduction: new ExperimentationDifficultyReduction(),
	RunemakingExperimentation: new RunemakingExperimentation(),
	JewelcraftingExperimentation: new JewelcraftingExperimentation(),
	LeatherworkingExperimentation: new LeatherworkingExperimentation(),
	AlchemyExperimentation: new AlchemyExperimentation(),
	HealingBonus: new HealingBonus(),
	DamageBonus: new DamageBonus(),
	Mining: new Mining(),
	Quarrying: new Quarrying(),
	Skinning: new Skinning(),
	Logging: new Logging(),
	Digging: new Digging(),
	IceFormationChance: new IceFormationChance(),
	DexterityCap: new DexterityCap(),
	IntellectCap: new IntellectCap(),
	SpiritCap: new SpiritCap(),
	StrengthCap: new StrengthCap(),
	ConstitutionCap: new ConstitutionCap(),
	ExploitWeaknessOre: new ExploitWeaknessOre(),
	ExploitWeaknessStone: new ExploitWeaknessStone(),
	ExploitWeaknessAnimal: new ExploitWeaknessAnimal(),
	ExploitWeaknessWood: new ExploitWeaknessWood(),
	ExploitWeaknessGrave: new ExploitWeaknessGrave(),
	PowerDamageBonusRanged: new PowerDamageBonusRanged(),
	PowerDamageBonusMelee: new PowerDamageBonusMelee(),
	BlacksmithingExperimentation: new BlacksmithingExperimentation(),
	StonemasonryExperimentation: new StonemasonryExperimentation(),
	NecromancyExperimentation: new NecromancyExperimentation(),
	WoodworkingExperimentation: new WoodworkingExperimentation(),
	BlacksmithingExperimentationPoints: new BlacksmithingExperimentationPoints(),
	RunemakingExperimentationPoints: new RunemakingExperimentationPoints(),
	NecromancyExperimentationPoints: new NecromancyExperimentationPoints(),
	WoodworkingExperimentationPoints: new WoodworkingExperimentationPoints(),
	LeatherworkingExperimentationPoints: new LeatherworkingExperimentationPoints(),
	StonemasonryExperimentationPoints: new StonemasonryExperimentationPoints(),
	AlchemyExperimentationPoints: new AlchemyExperimentationPoints(),
	JewelcraftingExperimentationPoints: new JewelcraftingExperimentationPoints(),
	OutOfCombatStaminaRegeneration: new OutOfCombatStaminaRegeneration(),
	HarvestingEfficiency: new HarvestingEfficiency(),
	HarvestingDamageAll: new HarvestingDamageAll(),
	HarvestingAll: new HarvestingAll(),
	SpotWeaknessAll: new SpotWeaknessAll(),
	PersonalHealingModifier: new PersonalHealingModifier(),
	RangedDistanceBonus: new RangedDistanceBonus(),
}
