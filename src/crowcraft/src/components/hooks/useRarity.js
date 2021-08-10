import { Rarities } from "models";
import { useState } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { capitalize } from "utils/string";


export function getRarityByName(name) {
    return Rarities[capitalize(name)];
}

export default function useRarity() {
    const [rarityName, setRarityQueryParam] = useQueryParam("rarity", StringParam);

    let rarity = null;

    if (rarityName !== null && rarityName !== undefined) {
        rarity = getRarityByName(rarityName);
    }
    const [state, setState] = useState(rarity);

    const setRarity = rarity => {
        setState(rarity);
        setRarityQueryParam(rarity ? rarity.name : undefined);
    };

    return [state, setRarity];
}