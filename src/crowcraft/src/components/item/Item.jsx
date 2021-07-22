import "./Item.css";

import { getAsset } from "data";
import { String } from "utils";

export const Item = ({ item, quantity = null }) => {
    const itemName = String.capitalize(item.name);

    return (
        <div className={`resource-container bg-rarity-${item.rarity.name} | relative w-100 h-100`} title={itemName}>
            <img src={getAsset(item.assetId)} alt={itemName} className="resource-image" />
            <div className="resource-count | absolute cursor-default">{quantity}</div>
        </div>
    )
};