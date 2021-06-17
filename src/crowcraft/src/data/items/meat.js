import { RawMaterial, Rarities } from "models";

export class Meat extends RawMaterial {
    constructor() {
        super(
            "meat",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}