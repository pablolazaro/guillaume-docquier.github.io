import { String } from "utils";

const items = [];
const itemsContext = require.context("./items", true, /^(?!.*index).*\.js$/);
for (const itemFileName of itemsContext.keys()) {
    let itemId = itemFileName
        .match(/\/([a-zA-Z-]*)\.js$/)[1]
        .split("-")
        .map(String.capitalize)
        .join("");

    items.push(itemsContext(itemFileName)[itemId]);
}

export { items };