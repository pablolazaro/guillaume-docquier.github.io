import { Rarities } from "models";
import { Ore } from "./ore";

export class Tin extends Ore {
    constructor() {
        super(
            "tin",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}