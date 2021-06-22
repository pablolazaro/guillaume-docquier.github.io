import { Item } from "components";
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
    return (
        <div className="flex items-center">
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
            <div className="ml1">({craft.craftingResult.item.professions.map(p => String.capitalize(p)).join(" or ")})</div>
        </div>
    )
};
