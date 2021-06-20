import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BowString } from "./bow-string";
import { EtherealDust } from "./ethereal-dust";
// import { BowLimbsRecurve } from "./bow-limbs-recurve";
import { BowRiser } from "./bow-riser";

export class BowRecurve extends Item {
    constructor() {
        super(
            "bow recurve",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new BowLimbsRecurve()), // TODO Missing
				new CraftingMaterial(1, new BowRiser()),
				new CraftingMaterial(1, new BowString()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
    