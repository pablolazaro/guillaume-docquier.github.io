import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { CastingAperture } from "./casting-aperture";
import { EtherealDust } from "./ethereal-dust";
import { FrostcastingEnclosure } from "./frostcasting-enclosure";
import { MetaMagicalConducter } from "./meta-magical-conducter";

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
