import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { ArrowheadBundle } from "./arrowhead-bundle";
import { Heartwood } from "./heartwood";
import { ArrowShaftBundle } from "./arrow-shaft-bundle";

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
