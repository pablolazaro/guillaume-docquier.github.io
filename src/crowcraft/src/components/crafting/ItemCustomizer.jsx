import { useState } from "react";

export const ItemCustomizer = ({ active, className, item, onItemCustomized }) => {
    if (!active) {
        return null;
    }

    return (
        <div className={className}>
            <ItemCustomizerContent item={item} onItemCustomized={onItemCustomized} />
        </div>
    );
};

const ItemCustomizerContent = ({ item, onItemCustomized }) => {
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
            <div className="mb2">Choose your stats</div>
            {customizableComponents.map((component, i) => <ComponentCustomizer key={`${component.id}.${i}`} component={component} onComponentCustomized={() => onComponentCustomized(i)} componentIndex={i + 1} />)}
        </>
    );
};

const ComponentCustomizer = ({ component, onComponentCustomized, componentIndex }) => {
    const customizationOptions = component.getCustomizationOptions();
    const [isSelected, setIsSelected] = useState(customizationOptions.map(() => false));

    const customizeComponent = (newComponent, optionIndex) => {
        const newState = [...isSelected];
        newState[optionIndex] = true
        setIsSelected(newState);

        component.customize(newComponent);
        onComponentCustomized();
    };

    return (
        <div className="mb3">
            <div className="mb1">{componentIndex}. {component.name}</div>
            <div className="flex ml3">
                {customizationOptions.map((option, i) => (
                    <div key={option.id} className="mr2">
                        <CustomizationOption option={option} onClick={() => customizeComponent(option, i)} isSelected={isSelected[i]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const CustomizationOption = ({ option, onClick, isSelected }) => {
    const selectionStyle = isSelected ? "bg-mauve-taupe" : "bg-verdigris"

    return (
        <div className={`${selectionStyle} pa2 dib pointer`} onClick={onClick}>
            <div className="flex items-center justify-center">
                {option.getCustomizationEffect()}
            </div>
        </div>
    );
};