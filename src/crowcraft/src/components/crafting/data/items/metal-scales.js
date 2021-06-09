import { Item, CraftingMaterial, Rarities, Professions } from "../item";
import { Iron } from "./iron";
import { Ore } from "./ore";
import { Coal } from "./coal";

export class MetalScales extends Item {
    constructor() {
        super(
            "metalScales",
            "metal scales",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(16, new Iron()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(12, new Coal())
            ],
            1
        );
    }
}