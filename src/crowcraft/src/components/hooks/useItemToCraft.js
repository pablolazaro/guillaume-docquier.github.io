import { items } from "data";
import { useState } from "react";
import { useQueryParam, StringParam } from 'use-query-params';

const allItems =
    items
        .map(item => new item())
        .filter(item => item.isCraftable);

export function getItemById(id) {
    return allItems.find(item => item.assetId === id);
}

export default function useItemToCraft() {
    const [itemId, setItemId] = useQueryParam("item", StringParam);
    let item = null;

    if (itemId !== null && itemId !== undefined) {
        item = getItemById(itemId);
    }

    const [state, setState] = useState(item);

    const setItemToCraft = item => {
        setState(item);
        setItemId(item.assetId);
    };

    return [state, setItemToCraft];
}