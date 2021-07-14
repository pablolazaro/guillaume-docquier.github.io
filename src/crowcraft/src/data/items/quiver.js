import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ArrowShaftBundle } from "./arrow-shaft-bundle";
import { ArrowheadBundle } from "./arrowhead-bundle";
import { EtherealDust } from "./ethereal-dust";
import { Heartwood } from "./heartwood";

export class Quiver extends Item {
    constructor() {
        super(
            "quiver",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new ArrowheadBundle()),
				new CraftingMaterial(1, new ArrowShaftBundle()),
				new CraftingMaterial(1, new ArrowShaftBundle()),
				new CraftingMaterial(5, new Heartwood()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
