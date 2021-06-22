import base64
from os import walk
from pathlib import Path
from PIL import Image
from io import BytesIO


def convert_pngs_to_svgs():
    data_folder = "./data"

    for (_, _, filenames) in walk(data_folder):
        for filename in filenames:
            with Image.open(f"{data_folder}/{filename}") as png_file:
                svg_code = """<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="{width}px" height="{height}px" viewBox="0 0 {width} {height}" enable-background="new 0 0 {width} {height}" xml:space="preserve">  <image id="image0" width="{width}" height="{height}" x="0" y="0"
    href="data:image/png;base64,{base64}" />
</svg>
                """

                width, height = png_file.size
                base64_string = get_base64_string(png_file)
                svg_code = svg_code.replace("{width}", str(width))\
                    .replace("{height}", str(height))\
                    .replace("{base64}", base64_string)

                output_folder = "./generated"
                Path(output_folder).mkdir(parents=True, exist_ok=True)
                out_filename = get_output_file_name(filename)
                with open(f"{output_folder}/{out_filename}", "w") as svg_file:
                    print(f"Saving {out_filename}")
                    svg_file.write(svg_code)

        print(f"Created {len(filenames)} files")


def get_base64_string(png_file):
    output_buffer = BytesIO()
    png_file.save(output_buffer, format="PNG")
    byte_data = output_buffer.getvalue()

    return base64.b64encode(byte_data).decode()


def get_output_file_name(input_file_name):
    modified_file_name = input_file_name.replace(".png", ".svg")\
        .replace("Icon_", "")\
        .replace("Component_", "")\
        .replace("Fuel_", "")\
        .replace("Reagent_", "")\
        .replace("Wep_", "")\
        .replace("_", "")

    return modified_file_name[0].lower() + modified_file_name[1:]


if __name__ == '__main__':
    convert_pngs_to_svgs()
