import { Rarities } from "models";
import { Ore } from "./ore";

export class Slag extends Ore {
    constructor() {
        super(
            "slag",
            [],
            [Rarities.Poor],
            [],
            1
        );
    }
}
