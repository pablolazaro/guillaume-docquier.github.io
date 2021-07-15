import csv
from pathlib import Path
from os import walk
from common import \
    make_profession, make_item_name, make_class_name, make_file_name_without_extension, rarity_names, rarity_ranks, ConsoleColors, get_profession_prefix, \
    data_folder, output_folder, get_filenames_of_type, FileTypes, parse_crafting_materials, make_imports, auto_generation_header
from item_customizations_generator import generate_customizations
from raw_material_files_generator import generate_raw_material_files


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    ITEM_NAME = 2
    REQUIRED_PROFESSIONS = 3
    RARITIES = 4
    MATERIALS = 5
    QUANTITY_PER_CRAFT = 6
    EFFECTED_BY_QUALITY = 7
    CUSTOMIZABLE = 8


def generate_item_files():
    print(ConsoleColors.OKCYAN, "\nGenerating items...", ConsoleColors.ENDC)
    for (_, _, filenames) in walk(data_folder):
        for filename in get_filenames_of_type(filenames, FileTypes.ITEMS):
            with open(f"{data_folder}/{filename}", "r") as tsv_file:
                print(filename)
                items = csv.reader(tsv_file, delimiter='\t')
                next(items)  # Skip header
                for item in items:
                    if item[Columns.IS_IMPLEMENTED] != "" and item[Columns.IS_UP_TO_DATE] != "":
                        generate_item_code(item)


def generate_item_code(item):
    item_data = extract_item_data(item)
    (file_name, js_code) = generate_js_code(item_data)

    Path(output_folder).mkdir(parents=True, exist_ok=True)
    with open(f"{output_folder}/{file_name}", "w") as js_file:
        js_file.write(js_code)


def extract_item_data(item):
    item_name = make_item_name(item[Columns.ITEM_NAME])
    file_name = make_file_name_without_extension(item_name) + ".js"
    class_name = make_class_name(item_name)
    professions = item[Columns.REQUIRED_PROFESSIONS].split(" - ")

    item_rarities = item[Columns.RARITIES].lower().replace(" ", "").split("-")
    try:
        item_rarities = rarity_names[rarity_ranks[item_rarities[0]]:rarity_ranks[item_rarities[min(1, len(item_rarities) - 1)]] + 1]
    except:
        print(ConsoleColors.FAIL, f"Invalid item rarities {{{item_rarities}}} for item: {{{item_name}}}", ConsoleColors.ENDC)

    crafting_materials = parse_crafting_materials(item[Columns.MATERIALS])

    quantity_per_craft = item[Columns.QUANTITY_PER_CRAFT]
    is_customizable = item[Columns.CUSTOMIZABLE]

    return file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, is_customizable


def generate_js_code(item_data):
    (file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, is_customizable) = item_data
    js_code = generate_customizable_item(item_data) if is_customizable.lower() == "yes" else generate_item(item_data)

    return file_name, js_code


def generate_item(item_data):
    js_code = auto_generation_header + """import { Item, CraftingMaterial, Rarities{professions_imports} } from "models";
{imports}

export class {class_name} extends Item {
    constructor() {
        super(
            "{item_name}",
            [{professions}],
            [{rarities}],
            [
                {crafting_materials}
            ],
            {quantity_per_craft}
        );
    }
}
"""

    (file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, _) = item_data

    professions_imports = [f", {profession_import}" for profession_import in set([get_profession_prefix(profession) for profession in set(professions)])]
    crafting_materials_set = set([crafting_material_name for (_, crafting_material_name) in crafting_materials])
    imports = make_imports(crafting_materials_set, current_item_name=item_name)

    try:
        js_crafting_materials = [f"new CraftingMaterial({quantity}, new {make_class_name(crafting_material_name)}())," for (quantity, crafting_material_name) in crafting_materials]
    except:
        js_crafting_materials = []
        print(ConsoleColors.FAIL, f"Cannot create crafting materials properly from crafting_materials {{{crafting_materials}}} for item: {{{item_name}}}", ConsoleColors.ENDC)

    return js_code.replace("{professions_imports}", "".join(sorted(professions_imports)))\
        .replace("{imports}", "\n".join(imports))\
        .replace("{class_name}", class_name)\
        .replace("{item_name}", item_name)\
        .replace("{professions}", ", ".join([make_profession(profession) for profession in professions]))\
        .replace("{rarities}", ", ".join([f"Rarities.{rarity}" for rarity in item_rarities])) \
        .replace("{crafting_materials}", "\n\t\t\t\t".join(js_crafting_materials))\
        .replace("{quantity_per_craft}", quantity_per_craft)


def generate_customizable_item(item_data):
    js_code = """{item_materials_set}
import { CustomizableComponent, Customization, CraftingMaterial, Rarities, ItemsStats{professions_imports} } from "models";
{imports}

export class {class_name} extends CustomizableComponent {
    constructor() {
        super(
            "{item_name}",
            [{professions}],
            [{rarities}],
            [
                {crafting_materials}
            ],
            {quantity_per_craft},
            [
                {customizations}
            ]
        );
    }
}

{customization_classes}"""

    (file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, _) = item_data

    professions_imports = [f", {profession_import}" for profession_import in set([get_profession_prefix(profession) for profession in set(professions)])]
    crafting_materials_set = set([crafting_material_name for (_, crafting_material_name) in crafting_materials])
    js_crafting_materials = [f"new CraftingMaterial({quantity}, new {make_class_name(crafting_material_name)}())," for (quantity, crafting_material_name) in crafting_materials]

    return js_code.replace("{professions_imports}", "".join(sorted(professions_imports)))\
        .replace("{item_materials_set}", ",".join(crafting_materials_set))\
        .replace("{class_name}", class_name)\
        .replace("{item_name}", item_name)\
        .replace("{professions}", ", ".join([f"Professions.{profession}" for profession in professions]))\
        .replace("{rarities}", ", ".join([f"Rarities.{rarity}" for rarity in item_rarities])) \
        .replace("{crafting_materials}", "\n\t\t\t\t".join(js_crafting_materials))\
        .replace("{quantity_per_craft}", quantity_per_craft)


if __name__ == '__main__':
    generate_item_files()
    generate_customizations()
    generate_raw_material_files()
