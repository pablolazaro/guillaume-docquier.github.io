import { RawMaterial, Rarities } from "models";

export class Gold extends RawMaterial {
    constructor() {
        super(
            "gold",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}
