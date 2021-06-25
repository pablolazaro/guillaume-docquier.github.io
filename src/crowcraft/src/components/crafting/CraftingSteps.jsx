import { Item } from "components";
import { getAsset } from "data";
import { String } from "utils";
import { memo } from "react";

export const CraftingSteps = memo(({ crafts }) => {
    return (
        <div className="flex flex-column">
            <div className="mb2 f3 fw5">Crafting steps</div>
            <div>
                {crafts.map(craft => (
                    <div key={craft.craftingResult.item.id} className="mb2">
                        <CraftingStep craft={craft} />
                    </div>
                ))}
            </div>
        </div>
    );
});

const CraftingStep = ({ craft }) => {
    const profession = craft.craftingResult.item.professions[0]; // We'll ignore duals for this, since the only known combination are at the same station (armorsmith/weaponsmith)

    return (
        <div className="flex items-center">
            <div className="w3 h3 flex items-center justify-center">
                <img src={getAsset(profession)} alt={String.capitalize(profession)} title={String.capitalize(profession)} />
            </div>
            <div className="h3 br mh3"></div>
            {craft.craftingMaterials.map((craftingMaterial, i) => (
                <div key={`${craftingMaterial.item.id}.${i}`} className="flex items-center">
                    {i > 0 ? <div className="mh1">+</div> : null}
                    <div className="w3 h3 f5">
                        <Item item={craftingMaterial.item} quantity={craftingMaterial.quantity} />
                    </div>
                </div>
            ))}
            <div className="mh1">=</div>
            <div className="w3 h3 f5">
                <Item item={craft.craftingResult.item} quantity={craft.craftingResult.quantity} />
            </div>
        </div>
    )
};
