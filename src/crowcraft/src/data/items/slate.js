import { Rarities } from "models";
import { Stone } from "./stone";

export class Slate extends Stone {
    constructor() {
        super(
            "slate",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
