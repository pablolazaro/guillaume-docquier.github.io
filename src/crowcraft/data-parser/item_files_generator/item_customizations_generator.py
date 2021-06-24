import csv
from pathlib import Path
from os import walk
from common import make_profession, make_item_name, make_class_name, make_file_name_without_extension, rarity_names, rarity_ranks, bcolors, get_profession_prefix, output_folder


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    ITEM_NAME = 2
    CUSTOMIZATION_NAME = 3
    MATERIALS = 4
    EFFECT_1 = 5
    EFFECT_2 = 6


def generate_customizations():
    data_folder = "./customizations"

    customizations_by_item = {}
    for (_, _, filenames) in walk(data_folder):
        for filename in filenames:
            with open(f"{data_folder}/{filename}", "r") as tsv_file:
                print(filename)
                customization_entries = csv.reader(tsv_file, delimiter='\t')
                next(customization_entries)  # Skip header
                for customization_entry in customization_entries:
                    if customization_entry[Columns.IS_IMPLEMENTED] != "" and customization_entry[Columns.IS_UP_TO_DATE] == "No":
                        item_name = customization_entry[Columns.ITEM_NAME]
                        if item_name not in customizations_by_item:
                            customizations_by_item[item_name] = []

                        customizations_by_item[item_name].append(customization_entry)

    for item_name, customizations in customizations_by_item.items():
        complete_item_customization(item_name, customizations)


def complete_item_customization(item_name, customizations):
    item_name = make_item_name(item_name)
    file_name = make_file_name_without_extension(item_name) + ".js"
    customization_data = [extract_customization_data(item_name, customization) for customization in customizations]

    with open(f"{output_folder}/{file_name}", "r+") as js_file:
        write_js_code(customization_data, js_file, item_name)


def extract_customization_data(item_name, customization):
    customization_name = make_item_name(customization[Columns.CUSTOMIZATION_NAME])
    customization_class_name = f"{make_class_name(customization_name)}{make_class_name(item_name)}Customization"

    raw_crafting_materials = customization[Columns.MATERIALS].lower().split(", ")
    crafting_materials = []
    for crafting_material in raw_crafting_materials:
        parts = crafting_material.replace(":", "").split("x ")
        try:
            [quantity, crafting_material_name] = parts
            quantity = int(quantity)
            crafting_materials.append((quantity, make_item_name(crafting_material_name)))
        except:
            print(bcolors.FAIL, f"Invalid crafting material {{{crafting_material}}} for item: {{{item_name}}} parsed as: {{{parts}}}", bcolors.ENDC)

    effect_1 = customization[Columns.EFFECT_1] if customization[Columns.EFFECT_1] != "" else None
    effect_2 = customization[Columns.EFFECT_2] if customization[Columns.EFFECT_2] != "" else None

    return customization_name, customization_class_name, crafting_materials, effect_1, effect_2


def write_js_code(customization_data, js_file, item_name):
    crafting_materials_set = set(js_file.readline().replace("\n", "").split(","))
    js_code = js_file.read() \
        .replace("{imports}", "\n".join(generate_imports(customization_data, crafting_materials_set, item_name))) \
        .replace("{customizations}", "\n\t\t\t\t".join(generate_customization_instanciations(customization_data))) \
        .replace("{customization_classes}", "\n".join(generate_customization_classes(customization_data, item_name)))

    js_file.seek(0)
    js_file.write(js_code)
    js_file.truncate()


def generate_imports(customization_data, crafting_materials_set, item_name):
    customization_name, _, _, _, _ = customization_data[0]
    for _, _, crafting_materials, _, _ in customization_data:
        crafting_materials_set.update([crafting_material_name for (_, crafting_material_name) in crafting_materials])
    try:
        imports = [f"import {{ {make_class_name(crafting_material_name)} }} from \"./{make_file_name_without_extension(crafting_material_name)}\";" for crafting_material_name in
                   crafting_materials_set]
    except:
        imports = []
        print(bcolors.FAIL, f"Cannot create imports properly from item set {{{crafting_materials_set}}} for customization: {{{customization_name}}} of item {{{item_name}}}", bcolors.ENDC)

    return imports


def generate_customization_instanciations(customization_data):
    customization_instanciations = []
    for _, customization_class_name, _, _, _ in customization_data:
        customization_instanciations.append(f"new {customization_class_name}(),")

    return customization_instanciations


def generate_customization_classes(customization_data, item_name):
    js_template = """class {customization_class_name} extends Customization {
    constructor() {
        super(
            "{customization_name}",
            [
                {crafting_materials}
            ],
            {
                [Rarities.Common.name]: [{wb_effect}],
                [Rarities.Uncommon.name]: [{wb_effect}],
                [Rarities.Rare.name]: [{wb_effect}],
                [Rarities.Epic.name]: [{po_effects}],
                [Rarities.Legendary.name]: [{po_effects}],
            }
        )
    }
}
"""

    customization_classes = []
    for customization_name, customization_class_name, crafting_materials, effect_1, effect_2 in customization_data:
        try:
            js_crafting_materials = [f"new CraftingMaterial({quantity}, new {make_class_name(crafting_material_name)}())," for (quantity, crafting_material_name) in crafting_materials]
        except:
            js_crafting_materials = []
            print(bcolors.FAIL, f"Cannot create crafting materials properly from crafting_materials {{{crafting_materials}}} for item: {{{item_name}}}", bcolors.ENDC)

        wb_effect = f"ItemsStats.{make_class_name(effect_1)}"

        po_effects = [make_class_name(effect_1), make_class_name(effect_2)] if effect_2 is not None else [make_class_name(effect_1)]
        po_effects = [f"ItemsStats.{effect}" for effect in po_effects]

        customization_classes.append(
            js_template.replace("{customization_class_name}", customization_class_name)
                .replace("{customization_name}", customization_name)
                .replace("{crafting_materials}", "\n\t\t\t\t".join(js_crafting_materials))
                .replace("{wb_effect}", wb_effect)
                .replace("{po_effects}", ", ".join(po_effects))
        )

    return customization_classes


if __name__ == '__main__':
    generate_customizations()
