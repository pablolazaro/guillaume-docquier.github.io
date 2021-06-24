import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { PistolBody } from "./pistol-body";
import { PistolBarrel } from "./pistol-barrel";
import { PistolPins } from "./pistol-pins";

export class Pistol extends Item {
    constructor() {
        super(
            "pistol",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new PistolBody()),
				new CraftingMaterial(1, new PistolBarrel()),
				new CraftingMaterial(1, new PistolPins()),
				new CraftingMaterial(10, new EtherealDust()),
            ],
            1
        );
    }
}
