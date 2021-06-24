import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { HeadMoldHammer } from "./head-mold-hammer";
import { MetalBar } from "./metal-bar";
import { EtherealDust } from "./ethereal-dust";

export class WeaponHeadHammer extends Item {
    constructor() {
        super(
            "weapon head: hammer",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new HeadMoldHammer()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1
        );
    }
}
