import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { ShieldBase } from "./shield-base";
import { EtherealDust } from "./ethereal-dust";
import { Enarmes } from "./enarmes";
// import { ShieldCovering } from "./shield-covering";

export class Shield extends Item {
    constructor() {
        super(
            "shield",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new ShieldCovering()), // TODO Missing
				new CraftingMaterial(1, new Enarmes()),
				// new CraftingMaterial(1, new ShieldBase()), // TODO Missing
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
    