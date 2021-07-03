import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { LeatherPadding } from "./leather-padding";
import { EtherealDust } from "./ethereal-dust";
import { MetalPlates } from "./metal-plates";

export class PlateBoots extends Item {
    constructor() {
        super(
            "plate boots",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalPlates()),
				new CraftingMaterial(1, new MetalPlates()),
				new CraftingMaterial(1, new LeatherPadding()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
