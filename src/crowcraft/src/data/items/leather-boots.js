import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { LeatherSquare } from "./leather-square";
// import { Rivets } from "./rivets";
import { EtherealDust } from "./ethereal-dust";

export class LeatherBoots extends Item {
    constructor() {
        super(
            "leather boots",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new LeatherSquare()),
				// new CraftingMaterial(1, new Rivets()), // TODO Missing, is this MetalRivets?
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
    