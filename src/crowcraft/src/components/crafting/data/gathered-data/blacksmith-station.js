import { Item, CraftingMaterial, Rarities, Professions } from "../item";

export const craftingComponents = {
    metalBar: new Item(
        "metalBar",
        "metal bar",
        [Professions.Armorsmith, Professions.Weaponsmith],
        [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        [new CraftingMaterial(6, "ore:nonBasic"), new CraftingMaterial(6, "ore:nonBasic"), new CraftingMaterial(6, "ore:nonBasic"), new CraftingMaterial(6, "coal")]
    ),
};
