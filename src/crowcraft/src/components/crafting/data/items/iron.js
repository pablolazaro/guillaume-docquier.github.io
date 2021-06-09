import { Rarities } from "../item";
import { Ore } from "./ore";

export class Iron extends Ore {
    constructor() {
        super(
            "iron",
            "iron",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}