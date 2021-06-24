import { RawMaterial, Rarities } from "models";

export class EtherealDust extends RawMaterial {
    constructor() {
        super(
            "ethereal dust",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}