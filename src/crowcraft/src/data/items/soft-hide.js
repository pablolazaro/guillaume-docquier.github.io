import { Rarities } from "models";
import { Hide } from "./hide";

export class SoftHide extends Hide {
    constructor() {
        super(
            "soft hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
