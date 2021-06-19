import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Ore } from "./ores";
import { Coal } from "./coal";

export class MetalBuckles extends Item {
    constructor() {
        super(
            "metal buckles",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(10, new Ore()),
                new CraftingMaterial(2, new Coal()),
            ],
            1
        );
    }
}