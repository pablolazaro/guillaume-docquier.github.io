import csv
from pathlib import Path
from os import walk
from common import \
    make_item_name, make_class_name, output_folder, data_folder, get_filenames_of_type, FileTypes, parse_crafting_materials, get_rarity_name, \
    make_imports, auto_generation_header


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    ITEM_NAME = 2
    MATERIALS = 3
    DISCIPLINE = 4
    DISCIPLINE_RARITY = 5
    BELT = 6
    BELT_RARITY = 7


def generate_belts_and_discs():
    for (_, _, filenames) in walk(data_folder):
        for filename in get_filenames_of_type(filenames, FileTypes.BELTS_AND_DISCS):
            with open(f"{data_folder}/{filename}", "r") as tsv_file:
                print(filename)
                items_stats = csv.reader(tsv_file, delimiter='\t')
                next(items_stats)  # Skip header
                generate_belts_and_discs_code(items_stats)


def generate_belts_and_discs_code(items_stats):
    belts_and_discs_data = extract_belts_and_discs_data(items_stats)
    js_code = write_js_code(belts_and_discs_data)

    Path(output_folder).mkdir(parents=True, exist_ok=True)
    with open(f"{output_folder}/disciplines-and-belts.js", "w") as js_file:
        js_file.write(js_code)


def extract_belts_and_discs_data(belts_and_discs):
    belts_and_discs_data = []
    for belt_and_disc in belts_and_discs:
        if belt_and_disc[Columns.IS_IMPLEMENTED] != "" and belt_and_disc[Columns.IS_UP_TO_DATE] != "":
            item_name = make_item_name(belt_and_disc[Columns.ITEM_NAME])
            crafting_materials = parse_crafting_materials(belt_and_disc[Columns.MATERIALS], item_name)
            discipline = belt_and_disc[Columns.DISCIPLINE].lower()
            discipline_rarity = get_rarity_name(belt_and_disc[Columns.DISCIPLINE_RARITY])
            belt = belt_and_disc[Columns.BELT].lower()
            belt_rarity = get_rarity_name(belt_and_disc[Columns.BELT_RARITY])

            belts_and_discs_data.append((item_name, crafting_materials, discipline, discipline_rarity, belt, belt_rarity))

    return belts_and_discs_data


def write_js_code(belts_and_discs_data):
    js_code = auto_generation_header + """import { CraftingMaterial } from "models";
{imports}

export const getMaterialsAfterDiscsAndBeltsEffects = (craftingMaterial, crafterConfiguration = {}) => {
    let bestNewCraftingMaterials = craftingMaterial.item.craftingMaterials;
    for (const profession of craftingMaterial.item.professions) {
        const newCraftingMaterials = getNewCraftingMaterials(craftingMaterial.item, profession, crafterConfiguration[profession]);
        if (newCraftingMaterials && getMatsCount(newCraftingMaterials) < getMatsCount(bestNewCraftingMaterials)) {
            bestNewCraftingMaterials = newCraftingMaterials;
        }
    }

    return bestNewCraftingMaterials;
};

const getNewCraftingMaterials = (item, profession, professionSetting = {}) => {
    const key = `${item.baseName}.${profession}-disc-${professionSetting.discipline}.${profession}-belt-${professionSetting.belt}`

    return DisciplinesAndBelts[key];
}

const getMatsCount = craftingMaterials => craftingMaterials.reduce((count, mat) => count + mat.quantity, 0);

const DisciplinesAndBelts = {
    {entries}
}
"""

    items_to_import_set = set()
    entries = []
    for item_name, crafting_materials, discipline, discipline_rarity, belt, belt_rarity in belts_and_discs_data:
        entry_key = f"{item_name}.{discipline}-disc-{discipline_rarity}.{belt}-belt-{belt_rarity}".lower()
        entry_value = "[\n"
        for (quantity, crafting_material) in crafting_materials:
            items_to_import_set.add(crafting_material)
            entry_value = entry_value + f"\t\tnew CraftingMaterial({quantity}, new {make_class_name(crafting_material)}()),\n"

        entry_value = entry_value + "\t]"

        entries.append(f"\"{entry_key}\": {entry_value},")

    imports = make_imports(items_to_import_set, prefix="data/items")

    return js_code.replace("{imports}", "\n".join(imports))\
        .replace("{entries}", "\n\t".join(entries))


if __name__ == '__main__':
    generate_belts_and_discs()
