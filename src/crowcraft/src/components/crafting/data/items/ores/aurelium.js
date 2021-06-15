import { Rarities } from "components/crafting/data/item";
import { Ore } from "./ore";

export class Aurelium extends Ore {
    constructor() {
        super(
            "aurelium",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}