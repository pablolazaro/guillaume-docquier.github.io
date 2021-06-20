import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Wood } from "./wood";
import { EtherealDust } from "./ethereal-dust";
import { Stone } from "./stone";

export class Sandpaper extends Item {
    constructor() {
        super(
            "sandpaper",
            [Professions.Woodworker],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Wood()),
				new CraftingMaterial(1, new Stone()),
				new CraftingMaterial(3, new EtherealDust()),
            ],
            5
        );
    }
}
    