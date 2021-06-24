import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Stone } from "./stone";
import { EtherealDust } from "./ethereal-dust";
import { Wood } from "./wood";

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
