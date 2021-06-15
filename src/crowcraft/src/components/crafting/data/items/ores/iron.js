import { Rarities } from "components/crafting/data/item";
import { Ore } from "./ore";

export class Iron extends Ore {
    constructor() {
        super(
            "iron",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}