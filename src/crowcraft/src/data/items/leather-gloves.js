import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { MetalRivets } from "./metal-rivets";
import { LeatherSquare } from "./leather-square";

export class LeatherGloves extends Item {
    constructor() {
        super(
            "leather gloves",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new MetalRivets()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
