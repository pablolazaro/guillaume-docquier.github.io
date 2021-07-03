import { RawMaterial, Rarities } from "models";

export class EtherealDust extends RawMaterial {
    constructor(
        name = "ethereal dust",
        professions = [],
        rarities = [Rarities.Common],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
