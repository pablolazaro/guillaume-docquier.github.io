import "./RarityPicker.css";

import { String } from "utils";
import { useState } from "react";

export const RarityPicker = ({ rarities, onRaritySelected }) => {
    const [selectedRarity, setSelectedRarity] = useState(null);

    const selectRarity = rarity => {
        setSelectedRarity(rarity);
        onRaritySelected(rarity);
    };

    return (
        <div>
            <div className="mb2">Choose a rarity</div>
            <div className="flex">
                {rarities.map(rarity => (
                    <div key={rarity.name} className="mr2 pointer">
                        <Rarity rarity={rarity} onRaritySelected={selectRarity} isSelected={selectedRarity === rarity} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Rarity = ({ rarity, onRaritySelected, isSelected }) => {
    const selectRarity = () => {
        onRaritySelected(rarity);
    };

    const selectionClassName = isSelected ? "selected" : "";

    return (
        <div className={`rarity ${selectionClassName} | bg-rarity-${rarity.name} pa2`} onClick={selectRarity}>
            {String.capitalize(rarity.name)}
        </div>
    );
}