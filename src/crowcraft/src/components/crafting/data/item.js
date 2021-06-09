export class Item {
    constructor(id, name, rarities, craftingMaterials) {
        this.id = id;
        this.name = name;
        this.rarities = rarities;
        this.craftingMaterials = craftingMaterials;
    }
}

export const Rarity = {
    Common: "white",
    Uncommon: "green",
    Rare: "blue",
    Epic: "purple",
    Legendary: "orange"
}