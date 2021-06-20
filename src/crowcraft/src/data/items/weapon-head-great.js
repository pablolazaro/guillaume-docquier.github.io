import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { RunestoneEsoteric } from "./runestone-esoteric";
// import { HeadMoldGreat } from "./head-mold-great";
import { EtherealDust } from "./ethereal-dust";
import { MetalBar } from "./metal-bar";

export class WeaponHeadGreat extends Item {
    constructor() {
        super(
            "weapon head great",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				// new CraftingMaterial(1, new HeadMoldGreat()), // TODO Missing
				new CraftingMaterial(8, new EtherealDust()),
				// new CraftingMaterial(1, new RunestoneEsoteric()), // TODO Not sure about that
            ],
            1
        );
    }
}
    