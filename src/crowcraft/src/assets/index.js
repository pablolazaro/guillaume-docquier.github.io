const assets = {};
const assetsContext = require.context("assets/", true, /\.svg$/);
for (const assetFileName of assetsContext.keys()) {
    const assetId = assetFileName.match(/\.\/([a-zA-Z]*)\.svg$/)[1];
    assets[assetId] = assetsContext(assetFileName).default;
}

export const getAsset = assetId => {
    return assets[assetId] || "";
};
