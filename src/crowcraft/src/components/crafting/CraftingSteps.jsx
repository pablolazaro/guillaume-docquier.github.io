import { RawMaterial } from "./raw-materials";
import { String } from "utils";

export const CraftingSteps = ({ crafts }) => {
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
};

const CraftingStep = ({ craft }) => (
    <div className="flex items-center">
        {craft.craftingMaterials.map((craftingMaterial, i) => (
            <div key={`${craftingMaterial.item.id}.${i}`} className="flex items-center">
                {i > 0 ? <div className="mh1">+</div> : null}
                <div className="w3 h3 f5">
                    <RawMaterial rawMaterial={craftingMaterial} />
                </div>
            </div>
        ))}
        <div className="mh1">=</div>
        <div className="w3 h3 f5">
            <RawMaterial rawMaterial={craft.craftingResult} />
        </div>
        <div className="ml1">({craft.craftingResult.item.professions.map(p => String.capitalize(p)).join(" or ")})</div>
    </div>
);
