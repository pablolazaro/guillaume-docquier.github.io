import { Item, CraftingMaterial, Rarities, Professions } from "./item";

export const armors = {
    leatherBoots: new Item(
        "leatherBoots",
        "leather boots",
        [Professions.Leatherworker],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(3, "metalScales"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
    leatherCap: new Item(
        "leatherCap",
        "leather cap",
        [Professions.Leatherworker],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        []
    ),
    leatherGloves: new Item(
        "leatherGloves",
        "leather gloves",
        [Professions.Leatherworker],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        []
    ),
    leatherTunic: new Item(
        "leatherTunic",
        "leather tunic",
        [Professions.Leatherworker],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        []
    ),
    mailBoots: new Item(
        "mailBoots",
        "mail boots",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(2, "metalScales"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
    mailCoif: new Item(
        "mailCoif",
        "mail coif",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(3, "metalScales"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
    mailGloves: new Item(
        "mailGloves",
        "mail gloves",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(2, "metalScales"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
    mailHauberk: new Item(
        "mailHauberk",
        "mail hauberk",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(3, "metalRings"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(18, "etherealDust")]
    ),
    plateBoots: new Item(
        "plateBoots",
        "plate boots",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(2, "metalPlates"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
    plateBreastplate: new Item(
        "plateBreastplate",
        "plate breastplate",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(3, "metalSheet"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(18, "etherealDust")]
    ),
    plateGloves: new Item(
        "plateGloves",
        "plate gloves",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(2, "metalPlates"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
    plateHelmet: new Item(
        "plateHelmet",
        "plate helmet",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(3, "metalPlates"), new CraftingMaterial(1, "leatherPadding"), new CraftingMaterial(6, "etherealDust")]
    ),
};
