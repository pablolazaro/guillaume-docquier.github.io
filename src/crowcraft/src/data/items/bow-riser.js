import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponGrip } from "./weapon-grip";
import { BowRest } from "./bow-rest";
import { BowSight } from "./bow-sight";

export class BowRiser extends Item {
    constructor() {
        super(
            "bow riser",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new BowRest()),
				new CraftingMaterial(1, new BowSight()),
            ],
            1
        );
    }
}
