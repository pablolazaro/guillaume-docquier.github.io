import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { HeadMoldAxe } from "./head-mold-axe";
import { EtherealDust } from "./ethereal-dust";
import { MetalBar } from "./metal-bar";

export class WeaponHeadAxe extends Item {
    constructor() {
        super(
            "weapon head: axe",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new HeadMoldAxe()),
				new CraftingMaterial(4, new EtherealDust()),
            ],
            1
        );
    }
}
    