import { Rarities } from "models";
import { Heartwood } from "./heartwood";

export class AshHeartwood extends Heartwood {
    constructor() {
        super(
            "ash heartwood",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
