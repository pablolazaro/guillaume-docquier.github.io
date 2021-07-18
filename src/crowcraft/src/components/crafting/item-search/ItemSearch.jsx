import "./ItemSearch.css";

import { items } from "data";
import { TextInput, Item } from "components";
import { Sorting } from "utils";
import { memo, useState, useEffect, useCallback } from "react";

const MAX_ITEMS_COUNT = 3000;

export const ItemSearch = memo(({ onItemSelected }) => {
    const [allItems] = useState(
        items
            .map(item => new item())
            .filter(item => item.isCraftable)
            .sort(Sorting.ascending(item => item.name))
            .sort(Sorting.descending(item => item.craftingRank))
    );

    const [filter, setFilter] = useState("");
    const [matchedItems, setMatchedItems] = useState(allItems);
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMatchedItems(allItems.filter(item => {
                if (filter.length === 0) {
                    return true;
                }

                return item.name.includes(filter);
            }))
        }, 300);

        return () => clearTimeout(timeout);
    }, [filter, allItems]);

    const onFilterChanged = e => {
        setFilter(e.target.value.toLowerCase());
    };

    const selectItem = useCallback(item => {
        setSelectedItemId(item.id);
        onItemSelected(item.createNew());
    }, [setSelectedItemId, onItemSelected]);

    return (
        <>
            <div className="mb2 f3 fw5">Find an item</div>
            <div className="mb3">
                <TextInput id="item-meta" name="item-meta" placeholder="Filter items" onInputChanged={onFilterChanged} />
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
});

const SelectableItem = memo(({ item, onItemSelected, isSelected }) => {
    const selectItem = () => {
        onItemSelected(item);
    };

    const selectionClassName = isSelected ? "selected" : "";

    return (
        <div className={`item ${selectionClassName} | mr2 pointer w4 h4`} onClick={selectItem}>
            <Item item={item} />
        </div>
    );
});
