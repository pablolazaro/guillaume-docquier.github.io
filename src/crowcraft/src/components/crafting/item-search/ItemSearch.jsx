import "./ItemSearch.css";

import { items } from "data";
import { TextInput, Item } from "components";
import { useState } from "react";
import { Sorting } from "utils";

const MAX_ITEMS_COUNT = 30;

export const ItemSearch = ({ onItemSelected }) => {
    const [allItems] = useState(
        items
            .map(item => new item())
            .filter(item => item.isCraftable)
            .sort(Sorting.ascending(item => item.name)
    ));

    const [keywords, setKeywords] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

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

    const selectItem = item => {
        setSelectedItemId(item.id);
        onItemSelected(item.createNew());
    };

    const matchedItems = allItems.filter(hasKeywordMatch);

    return (
        <>
            <div className="mb2 f3 fw5">Find an item</div>
            <div className="mb3">
                <TextInput id="item-meta" name="item-meta" placeholder="Filter items" onInputChanged={filterItems} />
            </div>
            <div className="flex flex-wrap">
                {matchedItems.slice(0, MAX_ITEMS_COUNT).map(item => (
                    <div key={item.id} className="mr2 mb2">
                        <SelectableItem item={item} onItemSelected={selectItem} isSelected={item.id === selectedItemId} />
                    </div>
                ))}
            </div>
            {matchedItems.length > MAX_ITEMS_COUNT ?
                <div>And {matchedItems.length - MAX_ITEMS_COUNT} more...</div> : null
            }
        </>
    );
};

const SelectableItem = ({ item, onItemSelected, isSelected }) => {
    const selectItem = () => {
        onItemSelected(item);
    };

    const selectionClassName = isSelected ? "selected" : "";

    return (
        <div className={`item ${selectionClassName} | mr2 pointer w4 h4`} onClick={selectItem}>
            <Item item={item} />
        </div>
    );
};
