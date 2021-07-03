import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { BowRiser } from "./bow-riser";
import { LimbsBowCompound } from "./limbs-bow-compound";
import { BowString } from "./bow-string";

export class BowCompound extends Item {
    constructor() {
        super(
            "bow: compound",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LimbsBowCompound()),
				new CraftingMaterial(1, new BowRiser()),
				new CraftingMaterial(1, new BowString()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
