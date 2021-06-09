import { Item, Rarity } from "./item";

export const armors = {
    leatherBoots: new Item("leatherBoots", "leather boots", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    leatherCap: new Item("leatherCap", "leather cap", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    leatherGloves: new Item("leatherGloves", "leather gloves", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    leatherTunic: new Item("leatherTunic", "leather tunic", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    mailBoots: new Item("mailBoots", "mail boots", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    mailCoif: new Item("mailCoif", "mail coif", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    mailGloves: new Item("mailGloves", "mail gloves", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    mailHauberk: new Item("mailHauberk", "mail hauberk", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    plateBoots: new Item("plateBoots", "plate boots", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    plateBreastplate: new Item("plateBreastplate", "plate breastplate", ["white", "green", "blue", "purple", "orange"], []),
    plateGloves: new Item("plateGloves", "plate gloves", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
    plateHelmet: new Item("plateHelmet", "plate helmet", [Rarity.Common, Rarity.Uncommon, Rarity.Rare, Rarity.Epic, Rarity.Legendary], []),
};
