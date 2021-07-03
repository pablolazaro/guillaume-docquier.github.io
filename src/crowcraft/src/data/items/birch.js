import { Rarities } from "models";
import { Wood } from "./wood";

export class Birch extends Wood {
    constructor() {
        super(
            "birch",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
