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
    ITEM_STATS = "customization"


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


def get_filenames_of_type(filenames, file_type):
    return [filename for filename in filenames if get_file_type(filename) == file_type]


def get_file_type(filename):
    if "raw materials" in filename.lower():
        return FileTypes.RAW_MATERIALS

    if "customizations" in filename.lower():
        return FileTypes.CUSTOMIZATIONS

    if "item stats" in filename.lower():
        return FileTypes.ITEM_STATS

    return FileTypes.ITEMS
