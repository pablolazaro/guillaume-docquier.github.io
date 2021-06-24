import { Rarities } from "models";
import { Wood } from "./wood";

export class Ash extends Wood {
    constructor() {
        super(
            "ash",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}