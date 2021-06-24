import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalRivets } from "./metal-rivets";
import { EtherealDust } from "./ethereal-dust";
import { LeatherSquare } from "./leather-square";

export class LeatherBoots extends Item {
    constructor() {
        super(
            "leather boots",
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
