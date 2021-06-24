import { Rarities } from "models";
import { Hide } from "./hide";

export class FlexibleHide extends Hide {
    constructor() {
        super(
            "flexible hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}