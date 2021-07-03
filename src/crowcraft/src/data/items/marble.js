import { Rarities } from "models";
import { Stone } from "./stone";

export class Marble extends Stone {
    constructor() {
        super(
            "marble",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
