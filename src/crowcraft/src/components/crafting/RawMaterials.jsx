import "./RawMaterials.css";

import { String } from "utils";
import { getAsset } from "assets"

export const RawMaterials = ({ rawMaterials }) => (
    <div className="flex flex-column">
        <div className="mb2">Raw materials:</div>
        <div className="flex">
            {rawMaterials.map((rawMaterial, i) => (
                <div className="mr2" key={`${rawMaterial.item.id}.${i}`}>
                    <RawMaterial rawMaterial={rawMaterial} />
                </div>
            ))}
        </div>    
    </div>
);

export const RawMaterial = ({ rawMaterial }) => {
    const { quantity, item } = rawMaterial;
    const itemName = String.capitalize(item.name);

    return (
        <div className={`resource-container bg-rarity-${item.rarity} | relative cursor-default`} title={itemName}>
            <img src={getAsset(item.id)} alt={itemName} className="resource-image" />
            <div class="resource-count | absolute">{quantity}</div>
        </div>
    )
};
