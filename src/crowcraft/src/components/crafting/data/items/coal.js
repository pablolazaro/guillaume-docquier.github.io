import { Item, CraftingMaterial, Rarities, Professions } from "../item";
import { Wood } from "./wood";
import { EtherealDust } from "./ethereal-dust";

export class Coal extends Item {
    constructor() {
        super(
            "coal",
            "coal",
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new Wood()),
                new CraftingMaterial(3, new EtherealDust())
            ],
            5
        );
    }
}