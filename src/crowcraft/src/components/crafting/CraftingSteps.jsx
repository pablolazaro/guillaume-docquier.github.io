import { RawMaterial } from "./RawMaterials";
import { String } from "utils";

export const CraftingSteps = ({ crafts }) => (
    <div className="flex flex-column">
        <div className="mb2">Crafting steps:</div>
        <div>
            {crafts.map(craft => (
                <div className="mb2" key={craft.craftingResult.item.id}>
                    <CraftingStep craft={craft} />
                </div>
            ))}
        </div>
    </div>
);

const CraftingStep = ({ craft }) => (
    <div className="flex items-center">
        {craft.craftingMaterials.map((craftingMaterial, i) => (
            <div key={`${craftingMaterial.item.id}.${i}`} className="flex items-center">
                {i > 0 ? <div className="mh1">+</div> : null}
                <RawMaterial rawMaterial={craftingMaterial} />
            </div>
        ))}
        <div className="mh1">=</div>
        <RawMaterial rawMaterial={craft.craftingResult} />
        <div className="ml1">({craft.craftingResult.item.professions.map(p => String.capitalize(p)).join(" or ")})</div>
    </div>
);
