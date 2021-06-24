import { Rarities } from "models";
import { Stone } from "./stone";

export class Travertine extends Stone {
    constructor() {
        super(
            "travertine",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}