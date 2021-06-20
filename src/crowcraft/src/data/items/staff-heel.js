import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { CompositeWoodPlank } from "./composite-wood-plank";
// import { HeelMold } from "./heel-mold";
import { EtherealDust } from "./ethereal-dust";

export class StaffHeel extends Item {
    constructor() {
        super(
            "staff heel",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(8, new EtherealDust()),
				// new CraftingMaterial(1, new HeelMold()), // TODO Missing
            ],
            1
        );
    }
}
    