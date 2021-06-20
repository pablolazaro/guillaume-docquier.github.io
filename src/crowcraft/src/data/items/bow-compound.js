import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BowString } from "./bow-string";
import { EtherealDust } from "./ethereal-dust";
// import { BowLimbsCompound } from "./bow-limbs-compound";
import { BowRiser } from "./bow-riser";

export class BowCompound extends Item {
    constructor() {
        super(
            "bow compound",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new BowLimbsCompound()), // TODO Missing
				new CraftingMaterial(1, new BowRiser()),
				new CraftingMaterial(1, new BowString()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
    