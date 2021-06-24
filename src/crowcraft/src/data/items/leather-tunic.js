import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { HardenedLeatherSquare } from "./hardened-leather-square";
import { MetalBuckles } from "./metal-buckles";

export class LeatherTunic extends Item {
    constructor() {
        super(
            "leather tunic",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new HardenedLeatherSquare()),
				new CraftingMaterial(1, new HardenedLeatherSquare()),
				new CraftingMaterial(1, new HardenedLeatherSquare()),
				new CraftingMaterial(1, new MetalBuckles()),
				new CraftingMaterial(18, new EtherealDust()),
            ],
            1
        );
    }
}
