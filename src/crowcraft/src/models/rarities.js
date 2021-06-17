class Rarity {
    constructor(rank, name, color) {
        this.rank = rank;
        this.name = name;
        this.color = color;
    }
};

export const Rarities = {
    Poor: new Rarity(0, "poor", "grey"),
    Common: new Rarity(1, "common", "white"),
    Uncommon: new Rarity(2, "uncommon", "green"),
    Rare: new Rarity(3, "rare", "blue"),
    Epic: new Rarity(4, "epic", "purple"),
    Legendary: new Rarity(5, "legendary", "orange"),
};
