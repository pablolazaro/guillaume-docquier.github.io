import "./Crafting.css";

import { ItemSearch } from "./item-search";
import { RawMaterials } from "./raw-materials";
import { RarityPicker } from "./rarity-picker";
import { CraftingSteps } from "./CraftingSteps";
import { ItemCustomizer } from "./item-customizer";
import { ProfessionsStatus } from "./professions-status";
import { CrafterConfiguration } from "./crafter-configuration";
import { useState, useEffect, useCallback } from "react";
import { getMaterialsAfterDiscsAndBeltsEffects } from "models";
import useItemToCraft from "components/hooks/useItemToCraft";
import useRarity from "components/hooks/useRarity";

export const Crafting = () => {
    const [itemToCraft, setItemToCraft] = useItemToCraft();
    const [selectedRarity, setSelectedRarity] = useRarity();
    const [rawMaterials, setRawMaterials] = useState(null);
    const [crafts, setCrafts] = useState(null);
    const [triggerItemCraft, setTriggerItemCraft] = useState(false);
    const [itemIsCustomized, setItemIsCustomized] = useState(false);
    const [crafterConfiguration, setCrafterConfiguration] = useState(undefined);

    // TODO This needs to be reviewed
    if (selectedRarity) {
        itemToCraft.setRarity(selectedRarity)
    }

    useEffect(
        () => {
            if (triggerItemCraft) {
                const craftingRundown = itemToCraft.getCraftingRundown(craftingMaterial => getMaterialsAfterDiscsAndBeltsEffects(craftingMaterial, crafterConfiguration));
                setRawMaterials(craftingRundown.rawMaterials);
                setCrafts(craftingRundown.crafts);
                setTriggerItemCraft(false);
            }
        },
        [triggerItemCraft, itemToCraft, crafterConfiguration, setRawMaterials, setCrafts]
    );

    const reset = useCallback(() => {
        setSelectedRarity(null);
        if (itemToCraft) {
            itemToCraft.setRarity(null);
        }

        setRawMaterials(null);
        setCrafts(null);
        setTriggerItemCraft(false);
        setItemIsCustomized(false);
    }, [setSelectedRarity, itemToCraft, setRawMaterials, setCrafts, setTriggerItemCraft, setItemIsCustomized]);

    const selectItemToCraft = useCallback(item => {
        reset();
        setItemToCraft(item);
    }, [reset, setItemToCraft]);

    const selectRarity = rarity => {
        setSelectedRarity(rarity);
        setTriggerItemCraft(itemIsCustomized || !itemToCraft.isCustomizable());
    };

    const completeItemCustomization = () => {
        setTriggerItemCraft(true);
        setItemIsCustomized(true);
    }

    const handleConfigurationChanged = newCrafterConfiguration => {
        setTriggerItemCraft(itemToCraft && (itemIsCustomized || !itemToCraft.isCustomizable()));
        setCrafterConfiguration(newCrafterConfiguration);
    }

    return (
        <div className="flex mv3">
            <div className="flex">
                <div className="mr5 mobile-hide">
                    <div className="sticky-sidebar">
                        <CrafterConfiguration onConfigurationChanged={handleConfigurationChanged} />
                    </div>
                </div>
                <div>
                    <div className="mb4">
                        <ProfessionsStatus />
                    </div>
                    <div className="mb4">
                        <ItemSearch selectedItem={itemToCraft} onItemSelected={selectItemToCraft} />
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
            </div>
        </div>
    )
}
