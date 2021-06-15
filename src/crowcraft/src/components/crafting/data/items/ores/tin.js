import { Rarities } from "components/crafting/data/item";
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