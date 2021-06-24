import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BendingFormSpellboundBow } from "./bending-form-spellbound-bow";
import { EtherealDust } from "./ethereal-dust";
import { CompositeWoodPlank } from "./composite-wood-plank";

export class LimbsBowSpellbound extends Item {
    constructor() {
        super(
            "limbs: bow spellbound",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(8, new EtherealDust()),
				new CraftingMaterial(1, new BendingFormSpellboundBow()),
            ],
            1
        );
    }
}
