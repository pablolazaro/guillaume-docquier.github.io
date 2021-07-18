///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { GroundCinnabar } from "./ground-cinnabar";
import { GroundDolomite } from "./ground-dolomite";
import { GroundHalite } from "./ground-halite";
import { GroundMineral } from "./ground-mineral";
import { GroundNitre } from "./ground-nitre";
import { GroundSulphur } from "./ground-sulphur";
import { PowderedGranite } from "./powdered-granite";
import { PowderedLimestone } from "./powdered-limestone";
import { PowderedMarble } from "./powdered-marble";
import { PowderedSlate } from "./powdered-slate";
import { PowderedStone } from "./powdered-stone";
import { PowderedTravertine } from "./powdered-travertine";
import { WaterFlask } from "./water-flask";

export class PhilosophersSolution extends CustomizableComponent {
    constructor() {
        super(
            "philosopher's solution",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(4, new PowderedStone()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(4, new GroundMineral()),
            ],
            1,
            [
                new DexterityPhilosophersSolutionCustomization(),
				new IntellectPhilosophersSolutionCustomization(),
				new SpiritPhilosophersSolutionCustomization(),
				new StrengthPhilosophersSolutionCustomization(),
				new ConstitutionPhilosophersSolutionCustomization(),
            ],
            ""
        );
    }
}

class DexterityPhilosophersSolutionCustomization extends Customization {
    constructor() {
        super(
            "dexterity",
            [
                new PowderedSlate(),
				new GroundHalite(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Dexterity],
                [Rarities.Uncommon.name]: [ItemsStats.Dexterity],
                [Rarities.Rare.name]: [ItemsStats.Dexterity],
                [Rarities.Epic.name]: [ItemsStats.Dexterity, ItemsStats.DexterityCap],
                [Rarities.Legendary.name]: [ItemsStats.Dexterity, ItemsStats.DexterityCap],
            }
        )
    }
}

class IntellectPhilosophersSolutionCustomization extends Customization {
    constructor() {
        super(
            "intellect",
            [
                new PowderedMarble(),
				new GroundDolomite(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Intellect],
                [Rarities.Uncommon.name]: [ItemsStats.Intellect],
                [Rarities.Rare.name]: [ItemsStats.Intellect],
                [Rarities.Epic.name]: [ItemsStats.Intellect, ItemsStats.IntellectCap],
                [Rarities.Legendary.name]: [ItemsStats.Intellect, ItemsStats.IntellectCap],
            }
        )
    }
}

class SpiritPhilosophersSolutionCustomization extends Customization {
    constructor() {
        super(
            "spirit",
            [
                new PowderedTravertine(),
				new GroundSulphur(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Spirit],
                [Rarities.Uncommon.name]: [ItemsStats.Spirit],
                [Rarities.Rare.name]: [ItemsStats.Spirit],
                [Rarities.Epic.name]: [ItemsStats.Spirit, ItemsStats.SpiritCap],
                [Rarities.Legendary.name]: [ItemsStats.Spirit, ItemsStats.SpiritCap],
            }
        )
    }
}

class StrengthPhilosophersSolutionCustomization extends Customization {
    constructor() {
        super(
            "strength",
            [
                new PowderedGranite(),
				new GroundCinnabar(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Strength],
                [Rarities.Uncommon.name]: [ItemsStats.Strength],
                [Rarities.Rare.name]: [ItemsStats.Strength],
                [Rarities.Epic.name]: [ItemsStats.Strength, ItemsStats.StrengthCap],
                [Rarities.Legendary.name]: [ItemsStats.Strength, ItemsStats.StrengthCap],
            }
        )
    }
}

class ConstitutionPhilosophersSolutionCustomization extends Customization {
    constructor() {
        super(
            "constitution",
            [
                new PowderedLimestone(),
				new GroundNitre(),
            ],
            {
                [Rarities.Common.name]: [ItemsStats.Constitution],
                [Rarities.Uncommon.name]: [ItemsStats.Constitution],
                [Rarities.Rare.name]: [ItemsStats.Constitution],
                [Rarities.Epic.name]: [ItemsStats.Constitution, ItemsStats.ConstitutionCap],
                [Rarities.Legendary.name]: [ItemsStats.Constitution, ItemsStats.ConstitutionCap],
            }
        )
    }
}
