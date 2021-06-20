import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { MetalBarOrPlank } from "./metal-bar-or-plank";

export class WeaponShaftMedium extends Item {
    constructor() {
        super(
            "weapon shaft medium",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new MetalBarOrPlank()), // TODO Implement 'or' rule
				// new CraftingMaterial(1, new MetalBarOrPlank()), // TODO Implement 'or' rule
            ],
            1
        );
    }
}
    