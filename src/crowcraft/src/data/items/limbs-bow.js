import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { CompositeWoodPlank } from "./composite-wood-plank";
// import { BendingForm } from "./bending-form";
import { EtherealDust } from "./ethereal-dust";

export class LimbsBow extends Item {
    constructor() {
        super(
            "limbs bow",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(8, new EtherealDust()),
				// new CraftingMaterial(1, new BendingForm()), // TODO Missing
            ],
            1
        );
    }
}
    