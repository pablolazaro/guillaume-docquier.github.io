import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BladeMoldMedium } from "./blade-mold-medium";
import { MetalBar } from "./metal-bar";
import { EtherealDust } from "./ethereal-dust";

export class WeaponBladeMedium extends Item {
    constructor() {
        super(
            "weapon blade: medium",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(4, new EtherealDust()),
				new CraftingMaterial(1, new BladeMoldMedium()),
            ],
            1
        );
    }
}
