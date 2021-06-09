import { CompletedStep, StepToComplete } from "./steps"
import { filters, options } from "./data";
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

    const revertSteps = index => () => {
        setSelectedFilters(selectedFilters.slice(0, index))
        setCurrentFilter(selectedFilters[index].filter);
    }

    const completeStep = choice => {
        setSelectedFilters([...selectedFilters, new SelectedFilter(currentFilter, choice)])
        setCurrentFilter(filters[choice.nextFilterId]);
    }

    return (
        <div className="mv3">
            {selectedFilters.map((selectedFilter, i) => 
                <div className="mb3" key={selectedFilter.filter.id}>
                    <CompletedStep name={selectedFilter.name} choice={selectedFilter.choice} onStepCanceled={revertSteps(i)} />
                </div>
            )}
            {!currentFilter ? null :
                <div className="mb3">
                    <StepToComplete name={currentFilter.name} options={currentFilter.optionIds.map(optionId => options[optionId])} onStepCompleted={completeStep} />
                </div>
            }
        </div>
    )
}
