import { ItemSearch } from "./item-search";
import { RawMaterials } from "./raw-materials";
import { RarityPicker } from "./rarity-picker";
import { CraftingSteps } from "./CraftingSteps";
import { ItemCustomizer } from "./item-customizer";
import { useState, useEffect } from "react";

export const Crafting = () => {
    const [itemToCraft, setItemToCraft] = useState(null);
    const [selectedRarity, setSelectedRarity] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [crafts, setCrafts] = useState(null);
    const [triggerItemCraft, setTriggerItemCraft] = useState(false);
    const [itemIsCustomized, setItemIsCustomized] = useState(false);

    useEffect(
        () => {
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
        reset();
        setItemToCraft(item);
    };

    const reset = () => {
        setSelectedRarity(null);
        if (itemToCraft) {
            itemToCraft.setRarity(null);
        }

        setRawMaterials(null);
        setCrafts(null);
        setTriggerItemCraft(false);
        setItemIsCustomized(false);
    };

    const selectRarity = rarity => {
        setSelectedRarity(rarity);
        itemToCraft.setRarity(rarity);
        setTriggerItemCraft(itemIsCustomized || !itemToCraft.isCustomizable());
    };

    const completeItemCustomization = () => {
        setTriggerItemCraft(true);
        setItemIsCustomized(true);
    }

    return (
        <div className="mv3">
            <div className="mb4">
                <ItemSearch onItemSelected={selectItemToCraft} />
            </div>
            {!!itemToCraft ?
                <div className="mb4">
                    <RarityPicker rarities={itemToCraft.rarities} selectedRarity={selectedRarity} onRaritySelected={selectRarity} />
                </div> : null
            }
            {!!selectedRarity && itemToCraft.isCustomizable() ?
                <div className="mb4">
                    <ItemCustomizer item={itemToCraft} onItemCustomized={completeItemCustomization} />
                </div> : null
            }
            {!!rawMaterials ?
                <div className="mb4">
                    <RawMaterials rawMaterials={rawMaterials} />
                </div> : null
            }
            {!!crafts ?
                <div className="mb4">
                    <CraftingSteps crafts={crafts} />
                </div> : null
            }
        </div>
    )
}
