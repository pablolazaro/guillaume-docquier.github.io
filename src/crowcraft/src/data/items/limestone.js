import { Rarities } from "models";
import { Stone } from "./stone";

export class Limestone extends Stone {
    constructor() {
        super(
            "limestone",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
