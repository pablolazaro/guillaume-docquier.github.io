import { useState, useCallback, memo } from "react";

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
            <div className="mb2">Choose your stats</div>
            {customizableComponents.map((component, i) => <ComponentCustomizer key={`${component.id}.${i}`} component={component} onComponentCustomized={() => onComponentCustomized(i)} componentIndex={i + 1} />)}
        </>
    );
});

const ComponentCustomizer = memo(({ component, onComponentCustomized, componentIndex }) => {
    const [customizationOptions] = useState(component.getCustomizationOptions());
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const customizeComponent = useCallback(
        (option, optionIndex) => {
            setSelectedIndex(optionIndex);
            component.customize(option);
            onComponentCustomized();
        },
        [setSelectedIndex, component, onComponentCustomized]
    );

    return (
        <div className="mb3">
            <div className="mb1">{componentIndex}. {component.name}</div>
            <div className="flex ml3">
                {customizationOptions.map((option, i) => (
                    <div key={option.id} className="mr2">
                        <CustomizationOption option={option} index={i} onOptionSelected={customizeComponent} isSelected={selectedIndex === i} />
                    </div>
                ))}
            </div>
        </div>
    );
});

const CustomizationOption = memo(({ option, index, onOptionSelected, isSelected }) => {
    const selectionStyle = isSelected ? "bg-mauve-taupe" : "bg-verdigris";

    const selectOption = () => {
        onOptionSelected(option, index);
    };

    return (
        <div className={`${selectionStyle} pa2 dib pointer`} onClick={selectOption}>
            <div className="flex items-center justify-center">
                {option.getCustomizationEffect()}
            </div>
        </div>
    );
});