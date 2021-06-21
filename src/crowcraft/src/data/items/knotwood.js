import { Rarities } from "models";
import { Wood } from "./wood";

export class Knotwood extends Wood {
    constructor() {
        super(
            "knotwood",
            [],
            [Rarities.Poor],
            [],
            1
        );
    }
}