import { RawMaterial, Rarities } from "../item";

export class Wood extends RawMaterial {
    constructor() {
        super(
            "wood",
            [],
            [Rarities.Poor, Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}