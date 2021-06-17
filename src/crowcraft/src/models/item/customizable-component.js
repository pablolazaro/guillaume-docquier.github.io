import { Item } from "./item";

export class CustomizableComponent extends Item {
    getCustomizableComponents() {
        return [this];
    }

    getCustomizationOptions() {
        throw new Error(`${this.id} must implement getCustomizationOptions`);
    }

    getCustomizationEffect() {
        throw new Error(`${this.id} must implement getCustomizationEffect`);
    }

    customize(other) {
        this.id = other.id;
        this.name = other.name;
        this.craftingMaterials = other.craftingMaterials;
        this.setRarity(this.rarity.name);
    }
};
