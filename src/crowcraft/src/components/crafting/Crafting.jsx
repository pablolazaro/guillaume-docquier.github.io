import { ItemSearch } from "./item-search";
import { RawMaterials } from "./raw-materials";
import { RarityPicker } from "./rarity-picker";
import { CraftingSteps } from "./CraftingSteps";
import { ItemCustomizer } from "./ItemCustomizer";
import { useState, useCallback, useEffect } from "react";

export const Crafting = () => {
    const [itemToCraft, setItemToCraft] = useState(null);
    const [selectedRarity, setSelectedRarity] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [crafts, setCrafts] = useState(null);
    const [triggerItemCraft, setTriggerItemCraft] = useState(false);

    useEffect(
        () => {
            console.log("SETTING RARITY", itemToCraft, selectedRarity);
            if (itemToCraft) {
                itemToCraft.setRarity(selectedRarity);
            }
        },
        [itemToCraft, selectedRarity]
    );

    useEffect(
        () => {
            console.log("CRAFTING ITEM", triggerItemCraft, itemToCraft);
            if (triggerItemCraft) {
                const { rawMaterials, crafts } = itemToCraft.getCraftingRundown();
                setRawMaterials(rawMaterials);
                setCrafts(crafts);
                setTriggerItemCraft(false);
            }
        },
        [triggerItemCraft, itemToCraft, setRawMaterials, setCrafts]
    );

    const selectItemToCraft = item => {
        setItemToCraft(item);
        reset();
    };

    const reset = () => {
        setSelectedRarity(null);
        setRawMaterials(null);
        setCrafts(null);
        setTriggerItemCraft(false);
    };

    const selectRarity = rarity => {
        setSelectedRarity(rarity);
        setTriggerItemCraft(selectedRarity || !itemToCraft.isCustomizable());
    };

    const completeItemCustomization = useCallback(
        () => {
            setTriggerItemCraft(true);
        },
        [setTriggerItemCraft]
    );

    return (
        <div className="mv3">
            <ItemSearch onItemSelected={selectItemToCraft} />
            {!!itemToCraft ?
                <div className="mb3">
                    <RarityPicker rarities={itemToCraft.rarities} onRaritySelected={selectRarity} />
                </div> : null
            }
            {!!selectedRarity && itemToCraft.isCustomizable() ?
                <div className="mb3">
                    <ItemCustomizer item={itemToCraft} onItemCustomized={completeItemCustomization} />
                </div> : null
            }
            {!!rawMaterials ?
                <div className="mb3">
                    <RawMaterials rawMaterials={rawMaterials} />
                </div> : null
            }
            {!!crafts ?
                <div className="mb3">
                    <CraftingSteps crafts={crafts} />
                </div> : null
            }
        </div>
    )
}
