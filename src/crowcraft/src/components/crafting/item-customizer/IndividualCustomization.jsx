import { ComponentCustomizer } from "./ComponentCustomizer";

export const IndividualCustomization = ({ customizableComponents, onComponentCustomized }) => {
    const customizeComponent = (customizableComponent, customizationOption) => {
        customizableComponent.customize(customizationOption);
        onComponentCustomized();
    }

    return (
        <>
            {customizableComponents.map((customizableComponent, i) => (
                <div key={`${customizableComponent.id}.${i}`} className="mr3 mb3">
                    <ComponentCustomizer customizableComponent={customizableComponent} componentIndex={i + 1} onComponentCustomized={customizeComponent} />
                </div>
            ))}
        </>
    );
};