import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";
import { EtherealDust } from "./ethereal-dust";
import { HeadMoldGreatAxe } from "./head-mold-great-axe";

export class WeaponHeadGreatAxe extends Item {
    constructor() {
        super(
            "weapon head: great axe",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new HeadMoldGreatAxe()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1
        );
    }
}
