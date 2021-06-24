import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";
import { BladeMoldCurved } from "./blade-mold-curved";
import { EtherealDust } from "./ethereal-dust";

export class WeaponBladeCurved extends Item {
    constructor() {
        super(
            "weapon blade: curved",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(4, new EtherealDust()),
				new CraftingMaterial(1, new BladeMoldCurved()),
            ],
            1
        );
    }
}
