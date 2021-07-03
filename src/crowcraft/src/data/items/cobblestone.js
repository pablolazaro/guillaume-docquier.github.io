import { Rarities } from "models";
import { Stone } from "./stone";

export class Cobblestone extends Stone {
    constructor() {
        super(
            "cobblestone",
            [],
            [Rarities.Poor],
            [],
            1
        );
    }
}
