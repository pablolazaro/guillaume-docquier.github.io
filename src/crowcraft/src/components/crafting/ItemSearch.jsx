import { CraftingMaterial } from "./data/item";
import { RawMaterial } from "./RawMaterials";
import { items } from "./data";

export const ItemSearch = ({ onItemSelected }) => {
    const craftableItems = items.map(item => new item()).filter(item => item.isCraftable);

    return (
        <div>
            <div className="mb2">Find an item you want to craft:</div>
            <div className="flex mb3">
                {craftableItems.map(item => (
                    <div className="mr2" key={item.id}>
                        <Item item={item} onItemSelected={onItemSelected} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Item = ({ item, onItemSelected }) => {
    const selectItem = () => {
        onItemSelected(item);
    };

    return (
        <div className="mr2 pointer" onClick={selectItem}>
            <RawMaterial rawMaterial={new CraftingMaterial(null, item)} />
        </div>
    );
};
