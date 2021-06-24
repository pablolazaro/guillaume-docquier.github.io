import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { Wood } from "./wood";
import { EtherealDust } from "./ethereal-dust";

export class Coal extends Item {
    constructor() {
        super(
            "coal",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(3, new EtherealDust()),
            ],
            5
        );
    }
}
