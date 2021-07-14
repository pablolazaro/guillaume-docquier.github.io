import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BarrelMoldArcane } from "./barrel-mold-arcane";
import { EtherealDust } from "./ethereal-dust";
import { MetalBar } from "./metal-bar";

export class CastingAperture extends Item {
    constructor() {
        super(
            "casting aperture",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new BarrelMoldArcane()),
				new CraftingMaterial(4, new EtherealDust()),
            ],
            1
        );
    }
}
