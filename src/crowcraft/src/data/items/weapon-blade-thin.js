import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BladeMoldThin } from "./blade-mold-thin";
import { EtherealDust } from "./ethereal-dust";
import { MetalBar } from "./metal-bar";

export class WeaponBladeThin extends Item {
    constructor() {
        super(
            "weapon blade: thin",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(4, new EtherealDust()),
				new CraftingMaterial(1, new BladeMoldThin()),
            ],
            1
        );
    }
}
