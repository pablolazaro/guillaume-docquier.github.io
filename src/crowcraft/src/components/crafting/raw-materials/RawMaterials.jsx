import { Item } from "components/item";

export const RawMaterials = ({ rawMaterials }) => (
    <div className="flex flex-column">
        <div className="mb2 f3 fw5">Raw materials</div>
        <div className="flex">
            {rawMaterials.map((rawMaterial, i) => (
                <div key={`${rawMaterial.item.id}.${i}`} className="f5 mr2 h3 w3">
                    <Item item={rawMaterial.item} quantity={rawMaterial.quantity} />
                </div>
            ))}
        </div>    
    </div>
);
