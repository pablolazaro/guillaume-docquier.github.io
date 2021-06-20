import { Item, CraftingMaterial, Rarities, Professions } from "models";
// import { BowLimbsSpellbound } from "./bow-limbsl-spellbound";
import { BowString } from "./bow-string";
import { EtherealDust } from "./ethereal-dust";
import { BowRiser } from "./bow-riser";

export class BowSpellbound extends Item {
    constructor() {
        super(
            "bow spellbound",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new BowLimbsSpellbound()), // TODO Missing
				new CraftingMaterial(1, new BowRiser()),
				new CraftingMaterial(1, new BowString()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
    