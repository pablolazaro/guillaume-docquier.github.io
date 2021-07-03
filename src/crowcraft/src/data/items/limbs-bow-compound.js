import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { BendingFormRecurveBow } from "./bending-form-recurve-bow";
import { EtherealDust } from "./ethereal-dust";

export class LimbsBowCompound extends Item {
    constructor() {
        super(
            "limbs: bow compound",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(8, new EtherealDust()),
				new CraftingMaterial(1, new BendingFormRecurveBow()),
            ],
            1
        );
    }
}
