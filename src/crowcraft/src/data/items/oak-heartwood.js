import { Rarities } from "models";
import { Heartwood } from "./heartwood";

export class OakHeartwood extends Heartwood {
    constructor() {
        super(
            "oak heartwood",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
