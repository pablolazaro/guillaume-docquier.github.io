import { CompletedStep, StepToComplete } from "./steps"
import { filters, options, Filter, Option } from "./crafting-filters";
import { gear, items } from "./data";
import { useState } from "react";
import { RawMaterials } from "./RawMaterials";
import { CraftingSteps } from "./CraftingSteps";

class SelectedFilter {
    constructor(filter, choice) {
        this.name = filter.name;
        this.filter = filter;
        this.choice = choice
    }
}

export const Crafting = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [currentFilter, setCurrentFilter] = useState(filters.craftingType);
    const [itemToCraft, setItemToCraft] = useState(null);
    const [selectedRarity, setSelectedRarity] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [crafts, setCrafts] = useState(null);

    const revertSteps = index => () => {
        setSelectedFilters(selectedFilters.slice(0, index))
        setCurrentFilter(selectedFilters[index].filter);
        setItemToCraft(null);
        revertSelectedRarity();
    };

    const completeStep = choice => {
        setSelectedFilters([...selectedFilters, new SelectedFilter(currentFilter, choice)])
        setCurrentFilter(filters[choice.nextFilterId]);
        if (!choice.nextFilterId) {
            setItemToCraft(gear[choice.id]);
        }
    };

    const revertSelectedRarity = () => {
        setSelectedRarity(null);
        setRawMaterials(null);
        setCrafts(null);
    };

    const completeRarityStep = rarity => {
        setSelectedRarity(rarity);

        const { rawMaterials, crafts } = itemToCraft.getCraftingOrder();
        setRawMaterials(rawMaterials);
        setCrafts(crafts);
    };

    return (
        <div className="mv3">
            {selectedFilters.map((selectedFilter, i) => 
                <div className="mb3" key={selectedFilter.filter.id}>
                    <CompletedStep name={selectedFilter.name} choice={selectedFilter.choice} onStepCanceled={revertSteps(i)} />
                </div>
            )}
            {!!currentFilter ?
                <div className="mb3">
                    <StepToComplete name={currentFilter.name} options={currentFilter.optionIds.map(optionId => options[optionId])} onStepCompleted={completeStep} />
                </div> : null
            }
            {!!itemToCraft && !selectedRarity ?
                <div className="mb3">
                    <StepToComplete name={"rarity"} options={itemToCraft.rarities.map(rarity => new Option(rarity, rarity, null))} onStepCompleted={completeRarityStep} />
                </div> : null
            }
            {!!selectedRarity ?
                <div className="mb3">
                    <CompletedStep name={"rarity"} choice={selectedRarity} onStepCanceled={revertSelectedRarity} />
                </div> : null
            }
            {!!rawMaterials ?
                <div className="mb3">
                    <RawMaterials rawMaterials={rawMaterials} />
                </div> : null
            }
            {!!crafts ?
                <div className="mb3">
                    <CraftingSteps crafts={crafts} />
                </div> : null
            }
        </div>
    )
}
