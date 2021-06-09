import { CompletedStep, StepToComplete } from "./steps"
import { filters, options, Filter, Option } from "./crafting-filters";
import { items } from "./data";
import { useState } from "react";

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

    const revertSteps = index => () => {
        setSelectedFilters(selectedFilters.slice(0, index))
        setCurrentFilter(selectedFilters[index].filter);
        setItemToCraft(null);
    }

    const completeStep = choice => {
        setSelectedFilters([...selectedFilters, new SelectedFilter(currentFilter, choice)])
        setCurrentFilter(filters[choice.nextFilterId]);
        if (!choice.nextFilterId) {
            setItemToCraft(items[choice.id]);
        }
    }

    const revertSelectedRarity = () => {
        setSelectedRarity(null);
    }

    const completeRarityStep = rarity => {
        setSelectedRarity(rarity);
    }

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
            {!!itemToCraft && !!selectedRarity ?
                <div className="mb3">
                    <CompletedStep name={"rarity"} choice={selectedRarity} onStepCanceled={revertSelectedRarity} />
                </div> : null
            }
        </div>
    )
}
