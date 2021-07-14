# Crowcraft

## Project structure
### Web development
Crowcraft is a ``React.js`` app built with ``Create React App``.  
You will find the usual React code in the ``public/`` and ``src/`` folders.  

The app is deployed as a [github page](https://pages.github.com/) by building the code and copying the content in the root folder. Github handles the deployment automatically.  

### Python Tools
The ``data-parser/`` folder is a collection of python tools for generating the javascript code for all the items based on the [data spreadsheet](https://docs.google.com/spreadsheets/d/1_VVrggn0nQrVEnUZ43qCUy4MMPXE2T0wzI0N-5nBskQ/edit?usp=sharing).  

It also contains utilities for converting pngs to svgs quickly.  

## Dev setup
### Web development
You will need [Node.js](https://nodejs.org/en/) v15.7.0 or higher (lower may work, but I can't guarantee it).  
You will also need an editor. I recommend [VSCode](https://code.visualstudio.com/), but you can pick your favorite editor.  
Once this is installed, simply run ``npm install`` to install 3rd party libraries, then ``npm run start`` will start a local dev server.  
``npm run deploy`` will build the app and copy the files in the right place. Do this if you want your changes to be deployed after you commit and push.  

### Python Tools
You will need this if you plan to work on item data.  
The project is very vanilla, all you need is Python 3 and an editor.  
For the editor, I strongly recommend [PyCharm](https://www.jetbrains.com/pycharm/download/#section=windows) (the community edition is free).  

## Development
Because items are numerous and to make it easier to keep them up to date, we generate all the code that defines items with the python tools.  

All the generated item files are under ``src/data/items/``. These files should NOT be modified by hand. If you feel like you need to modify them, then you have to modify the templates in python and regenerate all the items with the latest data.  
To get the latest data, all you have to do is to download the sheets from the [google sheet](https://docs.google.com/spreadsheets/d/1_VVrggn0nQrVEnUZ43qCUy4MMPXE2T0wzI0N-5nBskQ/edit?usp=sharing) as .tsv files.  

You will also find ``src/data/assets/``. In there, there are a lot of `` .svg`` files, and a lot more ``.png`` files.  
We use ``.svg`` files because they scale better, and we generate them from the ``.png`` files.  
The name of the ``.svg`` must match the name of the item it represents, in camelCase.  

Another particularity of the project is the use of [Tachyons](https://tachyons.io/), an [atomic css framework](https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/). It takes a bit of time to get used to it, but it allows you to quickly and easily write simple markdown, especially when you use flexbox.  
You should use atomic css whenever you can. However, sometimes it won't be possible and it's okay.  