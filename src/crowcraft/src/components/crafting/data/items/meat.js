import { RawMaterial, Rarities } from "../item";

export class Meat extends RawMaterial {
    constructor() {
        super(
            "meat",
            "meat",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}