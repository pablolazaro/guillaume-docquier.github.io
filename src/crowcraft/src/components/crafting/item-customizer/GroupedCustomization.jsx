import { ComponentCustomizer } from "./ComponentCustomizer";
import { useEffect, useState } from "react";

export const GroupedCustomization = ({ customizableComponents, onComponentCustomized }) => {
    const [customizationGroups] = useState(customizableComponents.reduce((groups, component) => {
        if (!groups[component.baseName]) {
            groups[component.baseName] = []
        }

        groups[component.baseName].push(component);

        return groups;
    }, {}));

    useEffect(() => {
        let componentWasCustomized = false;
        for (const componentsToCustomize of Object.values(customizationGroups)) {
            const targetCustomization = componentsToCustomize[0].customization;
            if (targetCustomization) {
                const targetCustomizationIndex = componentsToCustomize[0].possibleCustomizations.indexOf(targetCustomization);
                for (const componentToCustomize of componentsToCustomize) {
                    if (componentToCustomize.customization.id !== targetCustomization.id) {
                        componentToCustomize.customize(componentToCustomize.possibleCustomizations[targetCustomizationIndex]);
                        componentWasCustomized = true;
                    }
                }
            }
        }

        if (componentWasCustomized) {
            onComponentCustomized()
        }
    }, [customizationGroups, onComponentCustomized])

    const customizeComponent = (customizableComponent, _, customizationIndex) => {
        const componentsToCustomize = customizationGroups[customizableComponent.baseName];
        for (const componentToCustomize of componentsToCustomize) {
            componentToCustomize.customize(componentToCustomize.possibleCustomizations[customizationIndex]);
        }

        onComponentCustomized();
    }

    return (
        <>
            {Object.values(customizationGroups).map((componentsToCustomize, i) => (
                <div key={`${componentsToCustomize[0].id}.${i}`} className="mr3 mb3">
                    <ComponentCustomizer
                        customizableComponent={componentsToCustomize[0]}
                        componentIndex={i + 1}
                        onComponentCustomized={customizeComponent}
                        quantity={componentsToCustomize.length}
                    />
                </div>
            ))}
        </>
    );
};