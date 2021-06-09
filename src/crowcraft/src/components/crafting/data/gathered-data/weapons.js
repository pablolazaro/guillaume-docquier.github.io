import { Item, CraftingMaterial, Rarities, Professions } from "./item";

export const weapons = {
    axe: new Item(
        "axe",
        "axe",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponHead:axe"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "weaponShaft:short")]
    ),
    dagger: new Item(
        "dagger",
        "dagger",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponBlade:short"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "bladeRivets")]
    ),
    mace: new Item(
        "mace",
        "mace",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponHead:mace"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "weaponShaft:short")]
    ),
    rapier: new Item(
        "rapier",
        "rapier",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponBlade:thin"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "bladeRivets")]
    ),
    shortSword: new Item(
        "shortSword",
        "short sword",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponBlade:medium"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "bladeRivets")]
    ),
    greatAxe: new Item(
        "greatAxe",
        "great axe",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt:great"), new CraftingMaterial(1, "weaponHead:greatAxe"), new CraftingMaterial(20, "etherealDust"), new CraftingMaterial(1, "weaponShaft:medium")]
    ),
    greatMace: new Item(
        "greatMace",
        "great mace",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt:great"), new CraftingMaterial(1, "weaponHead:greatMace"), new CraftingMaterial(20, "etherealDust"), new CraftingMaterial(1, "weaponShaft:medium")]
    ),
    greatSword: new Item(
        "greatSword",
        "great sword",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt:great"), new CraftingMaterial(1, "weaponBlade:great"), new CraftingMaterial(20, "etherealDust"), new CraftingMaterial(1, "bladeRivets:great")]
    ),
    longsword: new Item(
        "longsword",
        "longsword",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponBlade:long"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "bladeRivets")]
    ),
    mysticalThrowingHammer: new Item(
        "mysticalThrowingHammer",
        "mystical throwing hammer",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponHead:hammer"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "weaponShaft:short")]
    ),
    pistol: new Item(
        "pistol",
        "pistol",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "pistolBody"), new CraftingMaterial(1, "pistolBarrel"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "pistolPins")]
    ),
    sickle: new Item(
        "sickle",
        "sickle",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "weaponHilt"), new CraftingMaterial(1, "weaponBlade:curved"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "bladeRivets")]
    ),
    smallBuckler: new Item(
        "smallBuckler",
        "small buckler",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "shieldCovering"), new CraftingMaterial(1, "shieldBase:small"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "enarmes")]
    ),
    mediumShield: new Item(
        "mediumShield",
        "medium shield",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "shieldCovering"), new CraftingMaterial(1, "shieldBase:medium"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "enarmes")]
    ),
    towerShield: new Item(
        "towerShield",
        "tower shield",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "shieldCovering"), new CraftingMaterial(1, "shieldBase:large"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "enarmes")]
    ),
    frostcaster: new Item(
        "frostcaster",
        "frostcaster",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(1, "frostcastingEnclosure"), new CraftingMaterial(1, "castingAperture"), new CraftingMaterial(10, "etherealDust"), new CraftingMaterial(1, "metaMagicalConductor")]
    ),
};
