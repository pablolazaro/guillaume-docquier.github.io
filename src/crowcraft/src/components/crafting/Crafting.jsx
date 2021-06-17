import { ItemSearch } from "./item-search";
import { RawMaterials } from "./raw-materials";
import { CompletedStep, StepToComplete } from "./steps"
import { CraftingSteps } from "./CraftingSteps";
import { ItemCustomizer } from "./ItemCustomizer";
import { useState, useCallback, useEffect } from "react";

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
    const [triggerItemCraft, setTriggerItemCraft] = useState(false);

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

    const completeRarityStep = rarity => {
        setSelectedRarity(rarity);
        setTriggerItemCraft(!itemToCraft.isCustomizable());
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
            {!!itemToCraft && !selectedRarity ?
                <div className="mb3">
                    <StepToComplete name={"rarity"} options={itemToCraft.rarities.map(rarity => new Option(rarity.name, rarity.name, null))} onStepCompleted={completeRarityStep} />
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
