import { Rarities } from "models";
import { Heartwood } from "./heartwood";

export class YewHeartwood extends Heartwood {
    constructor() {
        super(
            "yew heartwood",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
