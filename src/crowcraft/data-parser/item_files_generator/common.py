class ConsoleColors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


class FileTypes:
    ITEMS = "item"
    RAW_MATERIALS = "raw-material"
    CUSTOMIZATIONS = "customization"
    ITEM_STATS = "item-stats"
    BELTS_AND_DISCS = "belts-and-discs"


rarity_ranks = {
    "grey": 0,
    "white": 1,
    "green": 2,
    "blue": 3,
    "purple": 4,
    "orange": 5,
}

rarity_names = [
    "Poor",
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary"
]

data_folder = "./data"
output_folder = "./generated"

auto_generation_header = """///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

"""


def get_rarity_name(rarity_color):
    if rarity_color.lower() == "none":
        return rarity_color

    return rarity_names[rarity_ranks[rarity_color.lower()]]


def make_item_name(item_name):
    return item_name.lower().replace("-", " ")


def make_file_name_without_extension(item_name):
    return item_name.replace(":", "").replace(" ", "-").replace('\'', "")


def make_class_name(item_name):
    return "".join(map(capitalize, item_name.replace(":", "").replace('\'', "").split(" ")))


def capitalize(string):
    return string[0].upper() + string[1:]


def get_profession_prefix(profession):
    return "Vendors" if "vendor" in profession.lower() else "Professions"


def make_profession(profession):
    return f"{get_profession_prefix(profession)}.{''.join(map(capitalize, profession.lower().replace('vendor', '').strip().split(' ')))}"


def parse_crafting_materials(crafting_materials_data, current_item_name="unspecified"):
    sanitized_crafting_materials = crafting_materials_data.lower().replace("non-basic ", "").split(", ")
    crafting_materials = []
    for crafting_material in sanitized_crafting_materials:
        parts = crafting_material.replace(":", "").split("x ")
        try:
            [quantity, crafting_material_name] = parts
            quantity = int(quantity)
            crafting_materials.append((quantity, make_item_name(crafting_material_name)))
        except:
            print(ConsoleColors.FAIL, f"Invalid crafting material {{{crafting_material}}} for item: {{{current_item_name}}} parsed as: {{{parts}}}", ConsoleColors.ENDC)

    return crafting_materials


def make_imports(item_names_set, prefix=".", current_item_name="unspecified"):
    try:
        imports = [f"import {{ {make_class_name(crafting_material_name)} }} from \"{prefix}/{make_file_name_without_extension(crafting_material_name)}\";" for crafting_material_name in item_names_set]
    except:
        imports = []
        print(ConsoleColors.FAIL, f"Cannot create imports properly from item set {{{item_names_set}}} for item: {{{current_item_name}}}", ConsoleColors.ENDC)

    return sorted(imports)


def get_filenames_of_type(filenames, file_type):
    return [filename for filename in filenames if get_file_type(filename) == file_type]


def get_file_type(filename):
    if "raw materials" in filename.lower():
        return FileTypes.RAW_MATERIALS

    if "customizations" in filename.lower():
        return FileTypes.CUSTOMIZATIONS

    if "item stats" in filename.lower():
        return FileTypes.ITEM_STATS

    if "belts and discs" in filename.lower():
        return FileTypes.BELTS_AND_DISCS

    return FileTypes.ITEMS
