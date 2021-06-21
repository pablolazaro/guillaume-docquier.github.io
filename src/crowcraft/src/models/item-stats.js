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

class Resistance extends ItemStat {
    static types = {
        bleed: "bleed",
        fire: "fire",
        ice: "ice",
        electricity: "electricity",
        nature: "nature",
        poison: "poison",
        disease: "disease",
        slashing: "slashing",
        crushing: "crushing",
        piercing: "piercing",
    }

    constructor(resistanceType) {
        super(
            `${resistanceType} resistance`,
            {
                [Rarities.Common.name]: 8.31,
                [Rarities.Uncommon.name]: 9.33,
                [Rarities.Rare.name]: 9.85,
                [Rarities.Epic.name]: 10.58,
                [Rarities.Legendary.name]: 11.24
            }
        );
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
                [Rarities.Legendary.name]: 1.23
            }
        );
    }
}

class CriticalStrike extends ItemStat {
    constructor() {
        super(
            "critical strike",
            {
                [Rarities.Common.name]: 0.03,
                [Rarities.Uncommon.name]: 0.04,
                [Rarities.Rare.name]: 0.05,
                [Rarities.Epic.name]: 0.06,
                [Rarities.Legendary.name]: 0.07
            }
        );
    }
}

class CriticalDamage extends ItemStat {
    constructor() {
        super(
            "critical damage",
            {
                [Rarities.Common.name]: 0.17,
                [Rarities.Uncommon.name]: 0.19,
                [Rarities.Rare.name]: 0.21,
                [Rarities.Epic.name]: 0.23,
                [Rarities.Legendary.name]: 0.25
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
                [Rarities.Legendary.name]: 0.07
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
                [Rarities.Legendary.name]: 2.46
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
                [Rarities.Legendary.name]: 0.25
            }
        );
    }
}

class ArmorPenetration extends ItemStat {
    static types = {
        fire: "fire",
        ice: "ice",
        electricity: "electricity",
        nature: "nature",
        slashing: "slashing",
        crushing: "crushing",
        piercing: "piercing",
    }

    constructor(resistanceType) {
        super(
            `${resistanceType} armor penetration`,
            {
                [Rarities.Common.name]: 0.08,
                [Rarities.Uncommon.name]: 0.09,
                [Rarities.Rare.name]: 0.1,
                [Rarities.Epic.name]: 0.11,
                [Rarities.Legendary.name]: 0.12
            }
        );
    }
}

class DamageBonus extends ItemStat {
    static types = {
        fire: "fire",
        ice: "ice",
        electricity: "electricity",
        nature: "nature",
        poison: "poison",
        disease: "disease",
        slashing: "slashing",
        crushing: "crushing",
        piercing: "piercing",
    }

    constructor(resistanceType) {
        super(
            `${resistanceType} damage bonus`,
            {
                [Rarities.Common.name]: 0.36,
                [Rarities.Uncommon.name]: 0.4,
                [Rarities.Rare.name]: 0.43,
                [Rarities.Epic.name]: 0.45,
                [Rarities.Legendary.name]: 0.48
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
                [Rarities.Legendary.name]: 0.2
            }
        );
    }
}

class DamageType extends ItemStat {
    static types = {
        fire: "fire",
        ice: "ice",
        slashing: "slashing",
        crushing: "crushing",
        piercing: "piercing",
    }

    constructor(damageType) {
        super(
            `${damageType} damage type`,
            {
                [Rarities.Common.name]: null,
                [Rarities.Uncommon.name]: null,
                [Rarities.Rare.name]: null,
                [Rarities.Epic.name]: null,
                [Rarities.Legendary.name]: null
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
                [Rarities.Legendary.name]: 0.98
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
                [Rarities.Legendary.name]: 0.43
            }
        );
    }
}

class OutOfCombatHealthRegen extends ItemStat {
    constructor() {
        super(
            "out of combat health regeneration",
            {
                [Rarities.Common.name]: 0.59,
                [Rarities.Uncommon.name]: 0.67,
                [Rarities.Rare.name]: 0.71,
                [Rarities.Epic.name]: 0.76,
                [Rarities.Legendary.name]: 0.8
            }
        );
    }
}

export const ItemsStats = {
    BleedResistance: new Resistance(Resistance.types.bleed),
    FireResistance: new Resistance(Resistance.types.fire),
    IceResistance: new Resistance(Resistance.types.ice),
    ElectricityResistance: new Resistance(Resistance.types.electricity),
    NatureResistance: new Resistance(Resistance.types.nature),
    PoisonResistance: new Resistance(Resistance.types.poison),
    DiseaseResistance: new Resistance(Resistance.types.disease),
    SlashingResistance: new Resistance(Resistance.types.slashing),
    CrushingResistance: new Resistance(Resistance.types.crushing),
    PiercingResistance: new Resistance(Resistance.types.piercing),
    AttackPower: new AttackPower(),
    CriticalStrike: new CriticalStrike(),
    CriticalDamage: new CriticalDamage(),
    CriticalHealingChance: new CriticalHealingChance(),
    SupportPower: new SupportPower(),
    CriticalHealingAmount: new CriticalHealingAmount(),
    FireArmorPenetration: new ArmorPenetration(ArmorPenetration.types.fire),
    IceArmorPenetration: new ArmorPenetration(ArmorPenetration.types.ice),
    ElectricityArmorPenetration: new ArmorPenetration(ArmorPenetration.types.electricity),
    NatureArmorPenetration: new ArmorPenetration(ArmorPenetration.types.nature),
    SlashingArmorPenetration: new ArmorPenetration(ArmorPenetration.types.slashing),
    CrushingArmorPenetration: new ArmorPenetration(ArmorPenetration.types.crushing),
    PiercingArmorPenetration: new ArmorPenetration(ArmorPenetration.types.piercing),
    BleedDamageBonus: new BleedDamageBonus(),
    FireDamageBonus: new DamageBonus(DamageBonus.types.fire),
    IceDamageBonus: new DamageBonus(DamageBonus.types.ice),
    ElectricityDamageBonus: new DamageBonus(DamageBonus.types.electricity),
    NatureDamageBonus: new DamageBonus(DamageBonus.types.nature),
    PoisonDamageBonus: new DamageBonus(DamageBonus.types.poison),
    DiseaseDamageBonus: new DamageBonus(DamageBonus.types.disease),
    SlashingDamageBonus: new DamageBonus(DamageBonus.types.slashing),
    CrushingDamageBonus: new DamageBonus(DamageBonus.types.crushing),
    PiercingDamageBonus: new DamageBonus(DamageBonus.types.piercing),
    FireDamageType: new DamageType(DamageType.types.fire),
    IceDamageType: new DamageType(DamageType.types.ice),
    SlashingDamageType: new DamageType(DamageType.types.slashing),
    CrushingDamageType: new DamageType(DamageType.types.crushing),
    PiercingDamageType: new DamageType(DamageType.types.piercing),
    Stamina: new Stamina(),
    Stealth: new Stealth(),
    OutOfCombatHealthRegen: new OutOfCombatHealthRegen(),
};