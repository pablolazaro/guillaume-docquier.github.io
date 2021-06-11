import { RawMaterial } from "./RawMaterials";
import { String } from "utils";

export const CraftingSteps = ({ crafts }) => (
    <div className="flex flex-column">
        <div>Crafting steps:</div>
        {crafts.map(craft => <CraftingStep key={craft.craftingResult.item.id} craft={craft} />)}
    </div>
);

const CraftingStep = ({ craft }) => (
    <div className="flex nowrap">
        {craft.craftingMaterials.map((craftingMaterial, i) => (
            <div key={`${craftingMaterial.item.id}.${i}`} className="flex">
                {i > 0 ? <div className="mh1">+</div> : null}
                <RawMaterial rawMaterial={craftingMaterial} />
            </div>
        ))}
        <div className="mh1">=></div>
        <RawMaterial rawMaterial={craft.craftingResult} />
        <div className="ml1">({craft.craftingResult.item.professions.map(p => String.capitalize(p)).join(" or ")})</div>
    </div>
);
