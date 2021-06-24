import csv
from pathlib import Path
from os import walk
from common import make_profession, make_item_name, make_class_name, make_file_name_without_extension, rarity_names, rarity_ranks, bcolors, get_profession_prefix, output_folder


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    STAT_NAME = 2
    WHITE_VALUE = 3
    GREEN_VALUE = 4
    BLUE_VALUE = 5
    PURPLE_VALUE = 6
    ORANGE_VALUE = 7


def generate_items_stats():
    data_folder = "./items-stats"

    for (_, _, filenames) in walk(data_folder):
        for filename in filenames:
            with open(f"{data_folder}/{filename}", "r") as tsv_file:
                print(filename)
                items_stats = csv.reader(tsv_file, delimiter='\t')
                next(items_stats)  # Skip header
                generate_items_stats_code(items_stats)


def generate_items_stats_code(items_stats):
    items_stats_data = extract_items_stats_data(items_stats)
    js_code = write_js_code(items_stats_data)

    Path(output_folder).mkdir(parents=True, exist_ok=True)
    with open(f"{output_folder}/item-stats.js", "w") as js_file:
        js_file.write(js_code)


def extract_items_stats_data(items_stats):
    items_stats_data = []
    for item_stat in items_stats:
        stat_name = make_item_name(item_stat[Columns.STAT_NAME])
        stat_class_name = make_class_name(stat_name)
        white_value = item_stat[Columns.WHITE_VALUE]
        green_value = item_stat[Columns.GREEN_VALUE]
        blue_value = item_stat[Columns.BLUE_VALUE]
        purple_value = item_stat[Columns.PURPLE_VALUE]
        orange_value = item_stat[Columns.ORANGE_VALUE]

        items_stats_data.append((stat_name, stat_class_name, white_value, green_value, blue_value, purple_value, orange_value))

    return items_stats_data


def write_js_code(items_stats):
    js_code = """import { Rarities } from "./rarities";
import { CustomizationEffect } from "./item";

class ItemStat {
    constructor(name, valuesByRarity) {
        this.name = name;
        this.valuesByRarity = valuesByRarity;
    }

    getEffect(rarity) {
        return new CustomizationEffect(this.name, this.valuesByRarity[rarity.name]);
    }
}

{item_stat_classes}

export const ItemsStats = {
    {exports}
}
"""
    item_stat_classes = []
    exports = []
    for stat_name, stat_class_name, white_value, green_value, blue_value, purple_value, orange_value in items_stats:
        item_stat_classes.append(make_item_stat_class(stat_name, stat_class_name, white_value, green_value, blue_value, purple_value, orange_value))
        exports.append(f"{stat_class_name}: new {stat_class_name}(),")

    return js_code.replace("{item_stat_classes}", "\n\n".join(item_stat_classes))\
        .replace("{exports}", "\n\t".join(exports))


def make_item_stat_class(stat_name, stat_class_name, white_value, green_value, blue_value, purple_value, orange_value):
    js_code = """class {stat_class_name} extends ItemStat {
    constructor() {
        super(
            "{stat_name}",
            {
                [Rarities.Common.name]: {white_value},
                [Rarities.Uncommon.name]: {green_value},
                [Rarities.Rare.name]: {blue_value},
                [Rarities.Epic.name]: {purple_value},
                [Rarities.Legendary.name]: {orange_value},
            }
        );
    }
}"""

    return js_code.replace("{stat_class_name}", stat_class_name)\
        .replace("{stat_name}", stat_name)\
        .replace("{white_value}", white_value)\
        .replace("{green_value}", green_value)\
        .replace("{blue_value}", blue_value)\
        .replace("{purple_value}", purple_value)\
        .replace("{orange_value}", orange_value)


if __name__ == '__main__':
    generate_items_stats()
