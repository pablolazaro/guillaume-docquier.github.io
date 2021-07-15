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

class Lifesteal extends ItemStat {
    constructor() {
        super(
            "lifesteal",
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
	Lifesteal: new Lifesteal(),
	FireDamageType: new FireDamageType(),
	IceDamageType: new IceDamageType(),
	SlashingDamageType: new SlashingDamageType(),
	CrushingDamageType: new CrushingDamageType(),
	PiercingDamageType: new PiercingDamageType(),
}
