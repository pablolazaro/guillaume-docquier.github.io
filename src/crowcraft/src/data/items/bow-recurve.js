import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { LimbsBowRecurve } from "./limbs-bow-recurve";
import { EtherealDust } from "./ethereal-dust";
import { BowRiser } from "./bow-riser";
import { BowString } from "./bow-string";

export class BowRecurve extends Item {
    constructor() {
        super(
            "bow: recurve",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LimbsBowRecurve()),
				new CraftingMaterial(1, new BowRiser()),
				new CraftingMaterial(1, new BowString()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
