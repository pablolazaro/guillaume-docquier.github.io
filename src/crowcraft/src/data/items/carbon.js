import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Meat } from "./meat";
import { EtherealDust } from "./ethereal-dust";

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
