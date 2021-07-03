import { Rarities } from "models";
import { Wood } from "./wood";

export class Yew extends Wood {
    constructor() {
        super(
            "yew",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
