import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Meat } from "./meat";

export class Carbon extends Item {
    constructor() {
        super(
            "carbon",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new Meat()),
				new CraftingMaterial(3, new EtherealDust()),
            ],
            5
        );
    }
}
