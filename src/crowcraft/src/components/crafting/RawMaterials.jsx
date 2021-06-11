import { String } from "utils";

export const RawMaterials = ({ rawMaterials }) => (
    <div className="flex flex-column">
        <div>Raw materials:</div>
        {rawMaterials.map((rawMaterial, i) => <RawMaterial key={`${rawMaterial.item.id}.${i}`} rawMaterial={rawMaterial} />)}
    </div>
);

export const RawMaterial = ({ rawMaterial }) => (
    <div className="nowrap">
        {rawMaterial.quantity}x {String.capitalize(rawMaterial.item.name)}
    </div>
);
