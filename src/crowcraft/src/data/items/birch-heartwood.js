import { Rarities } from "models";
import { Heartwood } from "./heartwood";

export class BirchHeartwood extends Heartwood {
    constructor() {
        super(
            "birch heartwood",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
