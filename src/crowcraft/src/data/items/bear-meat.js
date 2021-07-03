import { Rarities } from "models";
import { Meat } from "./meat";

export class BearMeat extends Meat {
    constructor() {
        super(
            "bear meat",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}
