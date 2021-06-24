import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { CastingAperture } from "./casting-aperture";
import { EtherealDust } from "./ethereal-dust";
import { MetaMagicalConducter } from "./meta-magical-conducter";
import { FrostcastingEnclosure } from "./frostcasting-enclosure";

export class Frostcaster extends Item {
    constructor() {
        super(
            "frostcaster",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new FrostcastingEnclosure()),
				new CraftingMaterial(1, new CastingAperture()),
				new CraftingMaterial(1, new MetaMagicalConducter()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
