import { CraftingMaterial } from "./data/item";
import { RawMaterial } from "./RawMaterials";
import { items } from "./data";
import { TextInput } from "components";
import { useState } from "react";
import { Sorting } from "utils";

export const ItemSearch = ({ onItemSelected }) => {
    const [allItems] = useState(
        items
            .map(item => new item())
            .filter(item => item.isCraftable)
            .sort(Sorting.ascending(item => item.name)
    ));

    const [keywords, setKeywords] = useState([]);

    const filterItems = e => {
        const search = e.target.value;
        setKeywords(search.split(" ").filter(keyword => keyword.length > 0));
    };

    const hasKeywordMatch = item => {
        if (keywords.length === 0) {
            return true;
        }

        return keywords.some(keyword => item.name.includes(keyword));
    };

    return (
        <div>
            <div className="mb2">Select an item you want to craft:</div>
            <div className="mb3">
                <TextInput id="item-meta" name="item-meta" placeholder="Try 'mail'" onInputChanged={filterItems} />
            </div>
            <div className="flex mb3">
                {allItems.filter(hasKeywordMatch).map(item => (
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
        onItemSelected(item.createNew());
    };

    return (
        <div className="mr2 pointer" onClick={selectItem}>
            <RawMaterial rawMaterial={new CraftingMaterial(null, item)} />
        </div>
    );
};
