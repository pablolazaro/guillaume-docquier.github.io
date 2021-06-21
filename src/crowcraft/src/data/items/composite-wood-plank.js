import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
import { Wood } from "./wood";
import { Oak } from "./oak";
import { Yew } from "./yew";
import { Ash } from "./ash";
import { Birch } from "./birch";
import { Spruce } from "./spruce";
import { Sandpaper } from "./sandpaper";

export class CompositeWoodPlank extends CustomizableComponent {
    constructor() {
        super(
            "composite wood plank",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(6, new Wood()),
				new CraftingMaterial(6, new Wood()),
				new CraftingMaterial(6, new Wood()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            1,
            [
                new BattenCompositeWoodPlankCustomization(),
                new PliableCompositeWoodPlankCustomization(),
                new SapidCompositeWoodPlankCustomization(),
                new StoutCompositeWoodPlankCustomization(),
                new RusticCompositeWoodPlankCustomization(),
                new BuildersCompositeWoodPlankCustomization(),
                new PressedCompositeWoodPlankCustomization(),
                new PrimeCompositeWoodPlankCustomization(),
                new SheatedCompositeWoodPlankCustomization(),
                new WanedCompositeWoodPlankCustomization(),
                new SelectOakCompositeWoodPlankCustomization(),
                new SelectBirchCompositeWoodPlankCustomization(),
                new SelectSpruceCompositeWoodPlankCustomization(),
                new SelectAshCompositeWoodPlankCustomization(),
                new SelectYewCompositeWoodPlankCustomization(),
            ]
        );
    }
}

class BattenCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "batten",
            [
                new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SupportPower],
                [Rarities.Uncommon.name]: [ItemsStats.SupportPower],
                [Rarities.Rare.name]: [ItemsStats.SupportPower],
                [Rarities.Epic.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SupportPower, ItemsStats.AttackPower]
            }
        )
    }
}

class PliableCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "pliable",
            [
                new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stamnina],
                [Rarities.Uncommon.name]: [ItemsStats.Stamnina],
                [Rarities.Rare.name]: [ItemsStats.Stamnina],
                [Rarities.Epic.name]: [ItemsStats.Stamnina, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.Stamnina, ItemsStats.AttackPower]
            }
        )
    }
}

class SapidCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "sapid",
            [
                new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Stamnina],
                [Rarities.Uncommon.name]: [ItemsStats.Stamnina],
                [Rarities.Rare.name]: [ItemsStats.Stamnina],
                [Rarities.Epic.name]: [ItemsStats.Stamnina, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.Stamnina, ItemsStats.SupportPower]
            }
        )
    }
}

class StoutCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "stout",
            [
                new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.FireArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.FireArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.FireArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class RusticCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "rustic",
            [
                new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.IceArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.IceArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.IceArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class BuildersCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "builder's",
            [
                new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.ElectricityArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.ElectricityArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.ElectricityArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class PressedCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "pressed",
            [
                new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.NatureArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.NatureArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.NatureArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class PrimeCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "prime",
            [
                new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.SlashingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.SlashingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.SlashingArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class SheatedCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "sheated",
            [
                new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.CrushingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.CrushingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CrushingArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class WanedCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "waned",
            [
                new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Uncommon.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Rare.name]: [ItemsStats.PiercingArmorPenetration],
                [Rarities.Epic.name]: [ItemsStats.PiercingArmorPenetration, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.PiercingArmorPenetration, ItemsStats.AttackPower]
            }
        )
    }
}

class SelectOakCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "select oak",
            [
                new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(6, new Oak()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrike],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrike],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrike],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrike, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrike, ItemsStats.AttackPower]
            }
        )
    }
}

class SelectBirchCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "select birch",
            [
                new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(6, new Birch()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalDamage],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalDamage],
                [Rarities.Rare.name]: [ItemsStats.CriticalDamage],
                [Rarities.Epic.name]: [ItemsStats.CriticalDamage, ItemsStats.AttackPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalDamage, ItemsStats.AttackPower]
            }
        )
    }
}

class SelectSpruceCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "select spruce",
            [
                new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(6, new Spruce()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingChance],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingChance, ItemsStats.SupportPower]
            }
        )
    }
}

class SelectAshCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "select ash",
            [
                new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(6, new Ash()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Rare.name]: [ItemsStats.CriticalHealingAmount],
                [Rarities.Epic.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower],
                [Rarities.Legendary.name]: [ItemsStats.CriticalHealingAmount, ItemsStats.SupportPower]
            }
        )
    }
}

class SelectYewCompositeWoodPlankCustomization extends Customization {
    constructor() {
        super(
            "select yew",
            [
                new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(6, new Yew()),
				new CraftingMaterial(5, new Sandpaper()),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.CriticalStrike],
                [Rarities.Uncommon.name]: [ItemsStats.CriticalStrike],
                [Rarities.Rare.name]: [ItemsStats.CriticalStrike],
                [Rarities.Epic.name]: [ItemsStats.CriticalStrike, ItemsStats.CriticalDamage],
                [Rarities.Legendary.name]: [ItemsStats.CriticalStrike, ItemsStats.CriticalDamage]
            }
        )
    }
}
