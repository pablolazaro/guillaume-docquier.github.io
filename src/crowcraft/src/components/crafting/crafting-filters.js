export class Option {
    constructor(id, name, nextFilterId) {
        this.id = id;
        this.name = name;
        this.nextFilterId = nextFilterId;
    }
}

export class Filter {
    constructor(id, name, optionIds) {
        this.id = id;
        this.name = name;
        this.optionIds = optionIds;
    }
}

export const options = {
    armor: new Option("armor", "armor", "armorClass"),
    weapon: new Option("weapon", "weapon", "weaponClass"),
    leather: new Option("leather", "leather", "leatherArmor"),
    mail: new Option("mail", "mail", "mailArmor"),
    plate: new Option("plate", "plate", "plateArmor"),
    oneHanded: new Option("oneHanded", "one handed", "oneHandedWeapon"),
    twoHanded: new Option("twoHanded", "two handed", "twoHandedWeapon"),
    ranged: new Option("ranged", "ranged", "rangedWeapon"),
    shield: new Option("shield", "shield", "shieldWeapon"),
    magical: new Option("magical", "magical", "magicalWeapon"),
    leatherBoots: new Option("leatherBoots", "leather boots", null),
    leatherCap: new Option("leatherCap", "leather cap", null),
    leatherGloves: new Option("leatherGloves", "leather gloves", null),
    leatherTunic: new Option("leatherTunic", "leather tunic", null),
    mailBoots: new Option("mailBoots", "mail boots", null),
    mailCoif: new Option("mailCoif", "mail coif", null),
    mailGloves: new Option("mailGloves", "mail gloves", null),
    mailHauberk: new Option("mailHauberk", "mail hauberk", null),
    plateBoots: new Option("plateBoots", "plate boots", null),
    plateBreastplate: new Option("plateBreastplate", "plate breastplate", null),
    plateGloves: new Option("plateGloves", "plate gloves", null),
    plateHelmet: new Option("plateHelmet", "plate helmet", null),
    axe: new Option("axe", "axe", null),
    dagger: new Option("dagger", "dagger", null),
    mace: new Option("mace", "mace", null),
    rapier: new Option("rapier", "rapier", null),
    shortSword: new Option("shortSword", "short sword", null),
    greatAxe: new Option("greatAxe", "great axe", null),
    greatMace: new Option("greatMace", "great mace", null),
    greatSword: new Option("greatSword", "great sword", null),
    longsword: new Option("longsword", "longsword", null),
    mysticalThrowingHammer: new Option("mysticalThrowingHammer", "mystical throwing hammer", null),
    pistol: new Option("pistol", "pistol", null),
    sickle: new Option("sickle", "sickle", null),
    smallBuckler: new Option("smallBuckler", "small buckler", null),
    mediumShield: new Option("mediumShield", "medium shield", null),
    towerShield: new Option("towerShield", "tower shield", null),
    frostcaster: new Option("frostcaster", "frostcaster", null),
}

export const filters = {
    craftingType: new Filter("craftingType", "crafting type", ["armor", "weapon"]),
    armorClass: new Filter("armorClass", "armor class", ["leather", "mail", "plate"]),
    weaponClass: new Filter("weaponClass", "weapon class", ["oneHanded", "twoHanded", "ranged", "shield", "magical"]),
    leatherArmor: new Filter("leatherArmor", "armor", ["leatherBoots", "leatherCap", "leatherGloves", "leatherTunic"]),
    mailArmor: new Filter("mailArmor", "armor", ["mailBoots", "mailCoif", "mailGloves", "mailHauberk"]),
    plateArmor: new Filter("plateArmor", "armor", ["plateBoots", "plateBreastplate", "plateGloves", "plateHelmet"]),
    oneHandedWeapon: new Filter("oneHandedWeapon", "weapon", ["axe", "dagger", "mace", "rapier", "shortSword"]),
    twoHandedWeapon: new Filter("twoHandedWeapon", "weapon", ["greatAxe", "greatMace", "greatSword", "longsword", ]),
    rangedWeapon: new Filter("rangedWeapon", "weapon", ["mysticalThrowingHammer", "pistol", "sickle"]),
    shieldWeapon: new Filter("shieldWeapon", "weapon", ["smallBuckler", "mediumShield", "towerShield"]),
    magicalWeapon: new Filter("magicalWeapon", "weapon", ["frostcaster"])
};
