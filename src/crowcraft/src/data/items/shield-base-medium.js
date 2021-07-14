import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BendingFormMediumShield } from "./bending-form-medium-shield";
import { CompositeWoodPlank } from "./composite-wood-plank";

export class ShieldBaseMedium extends Item {
    constructor() {
        super(
            "shield base: medium",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new BendingFormMediumShield()),
            ],
            1
        );
    }
}
