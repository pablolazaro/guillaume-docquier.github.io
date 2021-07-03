import csv
from pathlib import Path
from os import walk
from common import \
    make_item_name, make_class_name, make_file_name_without_extension, rarity_names, rarity_ranks, ConsoleColors, \
    output_folder, data_folder, get_filenames_of_type, FileTypes


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    ITEM_NAME = 2
    ITEM_TYPE = 3
    RARITIES = 4


class ItemTypes:
    RAW_MATERIAL = "raw material"


def generate_raw_material_files():
    for (_, _, filenames) in walk(data_folder):
        for filename in get_filenames_of_type(filenames, FileTypes.RAW_MATERIALS):
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
    item_type = item[Columns.ITEM_TYPE]

    item_rarities = item[Columns.RARITIES].lower().replace(" ", "").split("-")
    try:
        item_rarities = rarity_names[rarity_ranks[item_rarities[0]]:rarity_ranks[item_rarities[min(1, len(item_rarities) - 1)]] + 1]
    except:
        print(ConsoleColors.FAIL, f"Invalid item rarities {{{item_rarities}}} for item: {{{item_name}}}", ConsoleColors.ENDC)

    return file_name, class_name, item_name, item_rarities, item_type


def generate_js_code(item_data):
    (file_name, class_name, item_name, item_rarities, item_type) = item_data
    js_code = generate_raw_material_item(item_data) if item_type.lower() == ItemTypes.RAW_MATERIAL else generate_item(item_data)

    return file_name, js_code


def generate_raw_material_item(item_data):
    js_code = """import { RawMaterial, Rarities } from "models";

export class {class_name} extends RawMaterial {
    constructor(
        name = "{item_name}",
        professions = [],
        rarities = [{rarities}],
        craftingMaterials = [],
        craftingQuantity = 1
    ) {
        super(name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}
"""

    (file_name, class_name, item_name, item_rarities, _) = item_data

    return js_code.replace("{class_name}", class_name)\
        .replace("{item_name}", item_name)\
        .replace("{rarities}", ", ".join([f"Rarities.{rarity}" for rarity in item_rarities]))


def generate_item(item_data):
    js_code = """import { Rarities } from "models";
{imports}

export class {class_name} extends {item_type_class_name} {
    constructor() {
        super(
            "{item_name}",
            [],
            [{rarities}],
            [],
            1
        );
    }
}
"""

    (file_name, class_name, item_name, item_rarities, item_type) = item_data

    item_type_class_name = make_class_name(item_type)
    imports = f"import {{ {item_type_class_name} }} from \"./{make_file_name_without_extension(item_type)}\";"

    return js_code.replace("{imports}", imports)\
        .replace("{class_name}", class_name)\
        .replace("{item_type_class_name}", item_type_class_name)\
        .replace("{item_name}", item_name)\
        .replace("{rarities}", ", ".join([f"Rarities.{rarity}" for rarity in item_rarities]))


if __name__ == '__main__':
    generate_raw_material_files()
