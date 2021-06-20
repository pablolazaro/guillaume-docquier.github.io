import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Ore } from "./ore";

/*
    TODO This item has +[2, 4, 6, 8, ?10?] Attack Power, which is not the same scale as other attack power stats
*/
export class MetalBlock extends Item {
    constructor() {
        super(
            "metal block",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new Ore()),
                new CraftingMaterial(3, new Ore()),
                new CraftingMaterial(3, new Ore()),
            ],
            1
        );
    }
}