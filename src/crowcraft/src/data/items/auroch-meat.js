import { Rarities } from "models";
import { Meat } from "./meat";

export class AurochMeat extends Meat {
    constructor() {
        super(
            "auroch meat",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}
