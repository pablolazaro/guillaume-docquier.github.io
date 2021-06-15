import { Item, CraftingMaterial, Rarities, Professions } from "../item";
import { Meat } from "./meat";
import { EtherealDust } from "./ethereal-dust";

export class LacingSinew extends Item {
    constructor() {
        super(
            "lacing sinew",
            [Professions.Leatherworker],
            [Rarities.Common],
            [
                new CraftingMaterial(3, new Meat()),
                new CraftingMaterial(3, new EtherealDust()),
            ],
            5
        );
    }
}