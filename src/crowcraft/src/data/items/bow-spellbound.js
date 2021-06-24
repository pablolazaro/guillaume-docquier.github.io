import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BowString } from "./bow-string";
import { BowRiser } from "./bow-riser";
import { EtherealDust } from "./ethereal-dust";
import { LimbsBowSpellbound } from "./limbs-bow-spellbound";

export class BowSpellbound extends Item {
    constructor() {
        super(
            "bow: spellbound",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LimbsBowSpellbound()),
				new CraftingMaterial(1, new BowRiser()),
				new CraftingMaterial(1, new BowString()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
