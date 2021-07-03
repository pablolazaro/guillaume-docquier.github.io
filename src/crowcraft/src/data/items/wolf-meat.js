import { Rarities } from "models";
import { Meat } from "./meat";

export class WolfMeat extends Meat {
    constructor() {
        super(
            "wolf meat",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}
