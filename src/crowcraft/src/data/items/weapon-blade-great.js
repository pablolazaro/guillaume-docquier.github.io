import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
// import { RunestoneEsoteric } from "./runestone-esoteric";
// import { BladeMoldGreat } from "./blade-mold-great";
import { MetalBar } from "./metal-bar";

export class WeaponBladeGreat extends Item {
    constructor() {
        super(
            "weapon blade great",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				// new CraftingMaterial(1, new BladeMoldGreat()), // TODO Missing
				new CraftingMaterial(8, new EtherealDust()),
				// new CraftingMaterial(1, new RunestoneEsoteric()), // TODO Not sure about that
            ],
            1
        );
    }
}
    