import "./RawMaterials.css";

import { String } from "utils";
import { getAsset } from "data";

export const RawMaterials = ({ rawMaterials }) => (
    <div className="flex flex-column">
        <div className="mb2">Raw materials:</div>
        <div className="flex">
            {rawMaterials.map((rawMaterial, i) => (
                <div key={`${rawMaterial.item.id}.${i}`} className="mr2">
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
        <div className={`resource-container bg-rarity-${item.rarity.name} | relative`} title={itemName}>
            <img src={getAsset(item.id)} alt={itemName} className="resource-image" />
            <div className="resource-count | absolute cursor-default">{quantity}</div>
        </div>
    )
};
