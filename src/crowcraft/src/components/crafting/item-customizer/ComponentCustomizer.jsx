import { Item } from "components";
import { useState } from "react";

export const ComponentCustomizer = ({ customizableComponent, componentIndex, onComponentCustomized, quantity = null }) => {
    const [customizationOptions] = useState(customizableComponent.possibleCustomizations);

    const customizeComponent = e => {
        onComponentCustomized(customizableComponent, customizationOptions[e.target.value], e.target.value);
    }

    const selectId = `customization-${componentIndex}`;
    const currentCustomization = customizableComponent.customization;
    const defaultSelectValue = currentCustomization ? customizableComponent.possibleCustomizations.indexOf(currentCustomization) : "default";

    return (
        <div className="flex items-center">
            <div className="h4 w4">
                <Item item={customizableComponent} />
            </div>
            <div className="flex flex-column ml2 space-between">
                <label className="mb1" htmlFor={selectId}>Stats for {quantity ? `${quantity} ` : ""}{customizableComponent.baseName}</label>
                <select className="stat-selector | w-100 peach-puff bg-marine pointer" name={selectId} id={selectId} onChange={customizeComponent} defaultValue={defaultSelectValue}>
                    <option disabled value="default"> -- select a stat -- </option>
                    {customizationOptions.map((customizationOption, i) => (
                        <option key={customizationOption.id} value={i}>
                            {formatCustomizationEffects(customizationOption.getCustomizationEffects(customizableComponent.rarity))}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const formatCustomizationEffects = customizationEffects => customizationEffects.map(ce => ce.effect).join(" + ");