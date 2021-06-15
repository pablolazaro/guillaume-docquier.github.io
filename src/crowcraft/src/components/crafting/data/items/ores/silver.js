import { Rarities } from "components/crafting/data/item";
import { Ore } from "./ore";

export class Silver extends Ore {
    constructor() {
        super(
            "silver",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}