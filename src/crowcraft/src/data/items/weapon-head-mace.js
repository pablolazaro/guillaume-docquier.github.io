import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";
import { EtherealDust } from "./ethereal-dust";
import { HeadMoldMace } from "./head-mold-mace";

export class WeaponHeadMace extends Item {
    constructor() {
        super(
            "weapon head: mace",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new HeadMoldMace()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1
        );
    }
}
