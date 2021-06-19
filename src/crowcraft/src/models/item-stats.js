import { Rarities } from "./rarities";
import { CustomizationEffect } from "./item";

class ItemStat {
    constructor(name, valuesByRarity) {
        this.name = name;
        this.valuesByRarity = valuesByRarity;
    }

    getEffect(rarity) {
        return new CustomizationEffect(this.name, this.valuesByRarity[rarity]);
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
                [Rarities.Common]: 8.31,
                [Rarities.Uncommon]: 9.33,
                [Rarities.Rare]: 9.85,
                [Rarities.Epic]: 10.58,
                [Rarities.Legendary]: 11.24
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
    PiercingResistance: new Resistance(Resistance.types.piercing)
};