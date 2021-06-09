import { RawMaterial, Rarities } from "../item";

export class EtherealDust extends RawMaterial {
    constructor() {
        super(
            "etherealDust",
            "ethereal dust",
            [],
            [Rarities.Common],
            [],
            1
        );
    }
}