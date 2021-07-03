import { Rarities } from "models";
import { Ore } from "./ore";

export class Copper extends Ore {
    constructor() {
        super(
            "copper",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
