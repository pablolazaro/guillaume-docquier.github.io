import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Hide } from "./hide";
import { DurableHide } from "./durable-hide";
import { FlexibleHide } from "./flexible-hide";
import { SoftHide } from "./soft-hide";
import { ToughHide } from "./tough-hide";
import { StrongHide } from "./strong-hide";

export class LeatherSquare extends CustomizableComponent {
    constructor() {
        super(
            "leather square",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(4, new Hide()),
				new CraftingMaterial(3, new Hide()),
				new CraftingMaterial(3, new Hide()),
            ],
            1,
            [
                new LimberCoriumLeatherSquareCustomization(),
                new SoftCoriumLeatherSquareCustomization(),
                new SturdyCoriumLeatherSquareCustomization(),
                new StoutCoriumLeatherSquareCustomization(),
                new CoriumLeatherSquareCustomization(),
                new ChamoiseLeatherSquareCustomization(),
                new StrudyBicastLeatherSquareCustomization(),
                new LimberGrainLeatherSquareCustomization(),
                new BicastLeatherSquareCustomization(),
                new SuedeLeatherSquareCustomization(),
            ]
        );
    }
}

class LimberCoriumLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "limber corium",
            [
                new CraftingMaterial(4, new DurableHide()),
				new CraftingMaterial(3, new FlexibleHide()),
				new CraftingMaterial(3, new FlexibleHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.BleedResistance],
                [Rarities.Uncommon.name]: [ItemsStats.BleedResistance],
                [Rarities.Rare.name]: [ItemsStats.BleedResistance],
                [Rarities.Epic.name]: [ItemsStats.BleedResistance],
                [Rarities.Legendary.name]: [ItemsStats.BleedResistance]
            }
        )
    }
}

class SoftCoriumLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "soft corium",
            [
                new CraftingMaterial(4, new DurableHide()),
				new CraftingMaterial(3, new SoftHide()),
				new CraftingMaterial(3, new SoftHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireResistance],
                [Rarities.Uncommon.name]: [ItemsStats.FireResistance],
                [Rarities.Rare.name]: [ItemsStats.FireResistance],
                [Rarities.Epic.name]: [ItemsStats.FireResistance],
                [Rarities.Legendary.name]: [ItemsStats.FireResistance]
            }
        )
    }
}

class SturdyCoriumLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "sturdy corium",
            [
                new CraftingMaterial(4, new DurableHide()),
				new CraftingMaterial(3, new StrongHide()),
				new CraftingMaterial(3, new StrongHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceResistance],
                [Rarities.Uncommon.name]: [ItemsStats.IceResistance],
                [Rarities.Rare.name]: [ItemsStats.IceResistance],
                [Rarities.Epic.name]: [ItemsStats.IceResistance],
                [Rarities.Legendary.name]: [ItemsStats.IceResistance]
            }
        )
    }
}

class StoutCoriumLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "stout corium",
            [
                new CraftingMaterial(4, new DurableHide()),
				new CraftingMaterial(3, new ToughHide()),
				new CraftingMaterial(3, new ToughHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Rare.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Epic.name]: [ItemsStats.ElectricityResistance],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityResistance]
            }
        )
    }
}

class CoriumLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "corium",
            [
                new CraftingMaterial(4, new FlexibleHide()),
				new CraftingMaterial(3, new DurableHide()),
				new CraftingMaterial(3, new DurableHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureResistance],
                [Rarities.Uncommon.name]: [ItemsStats.NatureResistance],
                [Rarities.Rare.name]: [ItemsStats.NatureResistance],
                [Rarities.Epic.name]: [ItemsStats.NatureResistance],
                [Rarities.Legendary.name]: [ItemsStats.NatureResistance]
            }
        )
    }
}

class ChamoiseLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "chamoise",
            [
                new CraftingMaterial(4, new FlexibleHide()),
				new CraftingMaterial(3, new SoftHide()),
				new CraftingMaterial(3, new SoftHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonResistance],
                [Rarities.Rare.name]: [ItemsStats.PoisonResistance],
                [Rarities.Epic.name]: [ItemsStats.PoisonResistance],
                [Rarities.Legendary.name]: [ItemsStats.PoisonResistance]
            }
        )
    }
}

class StrudyBicastLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "sturdy bicast",
            [
                new CraftingMaterial(4, new FlexibleHide()),
				new CraftingMaterial(3, new StrongHide()),
				new CraftingMaterial(3, new StrongHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Uncommon.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Rare.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Epic.name]: [ItemsStats.DiseaseResistance],
                [Rarities.Legendary.name]: [ItemsStats.DiseaseResistance]
            }
        )
    }
}

class LimberGrainLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "limber grain",
            [
                new CraftingMaterial(4, new FlexibleHide()),
				new CraftingMaterial(3, new ToughHide()),
				new CraftingMaterial(3, new ToughHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingResistance],
                [Rarities.Rare.name]: [ItemsStats.SlashingResistance],
                [Rarities.Epic.name]: [ItemsStats.SlashingResistance],
                [Rarities.Legendary.name]: [ItemsStats.SlashingResistance]
            }
        )
    }
}

class BicastLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "bicast",
            [
                new CraftingMaterial(4, new SoftHide()),
				new CraftingMaterial(3, new DurableHide()),
				new CraftingMaterial(3, new DurableHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingResistance],
                [Rarities.Rare.name]: [ItemsStats.CrushingResistance],
                [Rarities.Epic.name]: [ItemsStats.CrushingResistance],
                [Rarities.Legendary.name]: [ItemsStats.CrushingResistance]
            }
        )
    }
}

class SuedeLeatherSquareCustomization extends Customization {
    constructor() {
        super(
            "suede",
            [
                new CraftingMaterial(4, new SoftHide()),
				new CraftingMaterial(3, new FlexibleHide()),
				new CraftingMaterial(3, new FlexibleHide()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingResistance],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingResistance],
                [Rarities.Rare.name]: [ItemsStats.PiercingResistance],
                [Rarities.Epic.name]: [ItemsStats.PiercingResistance],
                [Rarities.Legendary.name]: [ItemsStats.PiercingResistance]
            }
        )
    }
}
