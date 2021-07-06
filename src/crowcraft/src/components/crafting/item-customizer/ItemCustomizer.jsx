import "./ItemCustomizer.css";

import { IndividualCustomization } from "./IndividualCustomization";
import { GroupedCustomization } from "./GroupedCustomization";
import { useState } from "react";

export const ItemCustomizer = ({ item, onItemCustomized }) => {
    const customizableComponents = item.getCustomizableComponents();
    const [customizations, setCustomizations] = useState(customizableComponents.map(cc => cc.customization ? cc.customization.name : null));
    const [customizeIndividually, setCustomizeIndividually] = useState(false);

    const onComponentCustomized = () => {
        setCustomizations(customizableComponents.map(cc => cc.customization ? cc.customization.name : null));
        if (customizableComponents.every(cc => cc.customization)) {
            onItemCustomized();
        }
    };

    const toggleCustomizeIndividually = () => {
        setCustomizeIndividually(!customizeIndividually);
    }

    return (
        <>
            <div className="flex items-center">
                <div className="mb2 f3 fw5 mr3">
                    Choose your stats ({customizations.filter(c => c).length}/{customizableComponents.length})
                </div>
                <div className="flex items-center">
                    <input
                        className="mr2 h1 w1"
                        value={customizeIndividually}
                        onChange={toggleCustomizeIndividually}
                        type="checkbox"
                        id="customize-individually"
                        name="customize-individually"
                    />
                    <label htmlFor="customize-individually">Customize components individually</label>
                </div>
            </div>
            <div className="flex flex-wrap">
                {customizeIndividually ?
                    <IndividualCustomization customizableComponents={customizableComponents} onComponentCustomized={onComponentCustomized} /> :
                    <GroupedCustomization customizableComponents={customizableComponents} onComponentCustomized={onComponentCustomized} />
                }
            </div>
        </>
    );
};
