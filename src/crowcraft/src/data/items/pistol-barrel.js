import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
// import { BarrelMold } from "./barrel-mold";
import { MetalBar } from "./metal-bar";

export class PistolBarrel extends Item {
    constructor() {
        super(
            "pistol barrel",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				// new CraftingMaterial(1, new BarrelMold()), // TODO Missing
				new CraftingMaterial(4, new EtherealDust()),
            ],
            1
        );
    }
}
    