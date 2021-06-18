import "./ItemCustomizer.css";

import { CraftingMaterial } from "models";
import { RawMaterial } from "components/crafting/raw-materials";
import { useState, memo } from "react";

export const ItemCustomizer = memo(({ item, onItemCustomized }) => {
    const customizableComponents = item.getCustomizableComponents();
    const [isCustomized, setIsCustomized] = useState(customizableComponents.map(() => false));

    const onComponentCustomized = i => {
        isCustomized[i] = true;
        setIsCustomized(isCustomized);
        if (isCustomized.every(x => x)) {
            onItemCustomized();
        }
    };

    return (
        <>
            <div className="mb2 f3 fw5">Choose your stats ({isCustomized.filter(x => x).length}/{customizableComponents.length})</div>
            <div className="flex">
                {customizableComponents.map((component, i) => (
                    <div key={`${component.id}.${i}`} className="mr3">
                        <ComponentCustomizer component={component} onComponentCustomized={() => onComponentCustomized(i)} componentIndex={i + 1} />
                    </div>
                ))}
            </div>
        </>
    );
});

const ComponentCustomizer = memo(({ component, onComponentCustomized, componentIndex }) => {
    const [customizationOptions] = useState(component.getCustomizationOptions());

    const customizeComponent = e => {
        component.customize(customizationOptions[e.target.value]);
        onComponentCustomized();
    }

    const selectId = `customization-${componentIndex}`;

    return (
        <div className="flex items-center">
            <div className="h4 w4">
                <RawMaterial rawMaterial={new CraftingMaterial(null, component)} />
            </div>
            <div className="flex flex-column ml2 space-between">
                <label className="mb1" htmlFor={selectId}>Stats for {component.name} #{componentIndex}</label>
                <select className="stat-selector | w-100 peach-puff bg-marine pointer" name={selectId} id={selectId} onChange={customizeComponent} defaultValue="default">
                    <option disabled value="default"> -- select a stat -- </option>
                    {customizationOptions.map((option, i) => (
                        <option key={option.getCustomizationEffect()} value={i}>{option.getCustomizationEffect()}</option>
                    ))}
                </select>
            </div>
        </div>
    );
});
