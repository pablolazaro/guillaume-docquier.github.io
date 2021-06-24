import { Rarities } from "models";
import { Hide } from "./hide";

export class DurableHide extends Hide {
    constructor() {
        super(
            "durable hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}