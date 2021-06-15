import { CompletedStep, StepToComplete } from "./steps"
import { useState, useCallback, useEffect } from "react";
import { RawMaterials } from "./RawMaterials";
import { CraftingSteps } from "./CraftingSteps";
import { ItemCustomizer } from "./ItemCustomizer";
import { ItemSearch } from "./ItemSearch";

// TODO Make a component for rarity selection
class Option {
    constructor(id, name, nextFilterId) {
        this.id = id;
        this.name = name;
        this.nextFilterId = nextFilterId;
    }
}

export const Crafting = () => {
    const [itemToCraft, setItemToCraft] = useState(null);
    const [selectedRarity, setSelectedRarity] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [crafts, setCrafts] = useState(null);
    const [isItemReadyToCraft, setIsItemReadyToCraft] = useState(null);

    useEffect(
        () => {
            if (itemToCraft) {
                itemToCraft.setRarity((selectedRarity || {}).id);
            }
        },
        [itemToCraft, selectedRarity]
    );

    useEffect(
        () => {
            if (isItemReadyToCraft) {
                const { rawMaterials, crafts } = itemToCraft.getCraftingRundown();
                setRawMaterials(rawMaterials);
                setCrafts(crafts);
            }
        },
        [isItemReadyToCraft, itemToCraft, setRawMaterials, setCrafts]
    );

    const selectItemToCraft = item => {
        setItemToCraft(item);
        reset();
    };

    const reset = () => {
        setSelectedRarity(null);
        setRawMaterials(null);
        setCrafts(null);
        setIsItemReadyToCraft(null);
    };

    const completeRarityStep = rarity => {
        setSelectedRarity(rarity);
        setIsItemReadyToCraft(!itemToCraft.isCustomizable());
    };

    const completeItemCustomization = useCallback(
        () => {
            setIsItemReadyToCraft(true);
        },
        [setIsItemReadyToCraft]
    );

    return (
        <div className="mv3">
            <ItemSearch onItemSelected={selectItemToCraft} />
            {!!itemToCraft && !selectedRarity ?
                <div className="mb3">
                    <StepToComplete name={"rarity"} options={itemToCraft.rarities.map(rarity => new Option(rarity, rarity, null))} onStepCompleted={completeRarityStep} />
                </div> : null
            }
            {!!selectedRarity ?
                <div className="mb3">
                    <CompletedStep name={"rarity"} choice={selectedRarity} onStepCanceled={reset} />
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
