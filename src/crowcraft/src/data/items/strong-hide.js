import { Rarities } from "models";
import { Hide } from "./hide";

export class StrongHide extends Hide {
    constructor() {
        super(
            "strong hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}