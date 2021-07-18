///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { AnimalBlood } from "./animal-blood";
import { Bloodworm } from "./bloodworm";
import { EmptyFlask } from "./empty-flask";
import { EtherealDust } from "./ethereal-dust";
import { Mandrake } from "./mandrake";
import { Nightshade } from "./nightshade";
import { ScavengedIngredient } from "./scavenged-ingredient";

export class AdvancedToxin extends CustomizableComponent {
    constructor() {
        super(
            "advanced toxin",
            [Professions.Alchemist],
            [Rarities.Common],
            [
                new CraftingMaterial(1, new EmptyFlask()),
				new CraftingMaterial(4, new ScavengedIngredient()),
				new CraftingMaterial(10, new EtherealDust()),
				new CraftingMaterial(1, new AnimalBlood()),
            ],
            1,
            [
                new PotentPoisonToxinAdvancedToxinCustomization(),
				new AdvancedPoisonToxinAdvancedToxinCustomization(),
				new PoisonToxinAdvancedToxinCustomization(),
            ],
            ""
        );
    }
}

class PotentPoisonToxinAdvancedToxinCustomization extends Customization {
    constructor() {
        super(
            "potent poison toxin",
            [
                new Mandrake(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PoisonDamageBonus],
            }
        )
    }
}

class AdvancedPoisonToxinAdvancedToxinCustomization extends Customization {
    constructor() {
        super(
            "advanced poison toxin",
            [
                new Nightshade(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PoisonDamageBonus],
            }
        )
    }
}

class PoisonToxinAdvancedToxinCustomization extends Customization {
    constructor() {
        super(
            "poison toxin",
            [
                new Bloodworm(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Uncommon.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Rare.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Epic.name]: [ItemsStats.PoisonDamageBonus],
                [Rarities.Legendary.name]: [ItemsStats.PoisonDamageBonus],
            }
        )
    }
}
