import { Rarities } from "models";
import { Heartwood } from "./heartwood";

export class SpruceHeartwood extends Heartwood {
    constructor() {
        super(
            "spruce heartwood",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
