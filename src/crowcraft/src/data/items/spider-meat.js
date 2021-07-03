import { Rarities } from "models";
import { Meat } from "./meat";

export class SpiderMeat extends Meat {
    constructor() {
        super(
            "spider meat",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}
