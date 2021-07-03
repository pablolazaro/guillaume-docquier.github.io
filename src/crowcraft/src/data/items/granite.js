import { Rarities } from "models";
import { Stone } from "./stone";

export class Granite extends Stone {
    constructor() {
        super(
            "granite",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
