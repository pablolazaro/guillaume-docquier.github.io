import { Item } from "./item";
import { String } from "utils";

export class CustomizableComponent extends Item {
    constructor(name, professions, rarities, craftingMaterials, craftingQuantity, possibleCustomizations) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);

        this.possibleCustomizations = possibleCustomizations;
        this.customization = null;
    }

    get id() {
        if (!this.customization) {
            return this._id;
        }

        return `${this._id}${String.capitalize(this.customization.id)}`;
    }

    get name() {
        if (!this.customization) {
            return this._name;
        }

        return `${this._name} (${this.customization.name})`;
    }

    get baseName() {
        return this._name;
    }

    get craftingMaterials() {
        if (!this.customization) {
            return this._craftingMaterials;
        }

        return this.customization.craftingMaterials;
    }

    getCustomizableComponents() {
        return [this];
    }

    getCustomizationEffects() {
        if (!this.customization) {
            return [];
        }

        return this.customization.getCustomizationEffects(this.rarity);
    }

    customize(customization) {
        this.customization = customization;
        this.setRarity(this.rarity);
    }
};

export class Customization {
    constructor(name, craftingMaterials, customizationEffects) {
        this.id = String.decapitalize(
            name
                .split(" ")
                .map(String.capitalize)
                .join("")
        );
        this.name = name; 
        this.craftingMaterials = craftingMaterials;
        this.customizationEffects = customizationEffects;
    }

    getCustomizationEffects(rarity) {
        try {
            return this.customizationEffects[rarity.name].map(itemStat => itemStat.getEffect(rarity));
        }
        catch (e) {
            console.error(`Error in customization stats for item: ${this.name}`);
        }

        return [];
    }
};

export class CustomizationEffect {
    constructor(effect, value) {
        this.effect = effect; 
        this.value = value; 
    }
};
