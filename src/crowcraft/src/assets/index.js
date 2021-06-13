const assets = {
    aurelium: require("./aurelium.svg").default,
    coal: require("./coal.svg").default,
    copper: require("./copper.svg").default,
    etherealDust: require("./etherealDust.svg").default,
    iron: require("./iron.svg").default,
    lacingSinew: require("./lacingSinew.svg").default,
    leatherPadding: require("./leatherPadding.svg").default,
    mailCoif: require("./mailCoif.svg").default,
    metalScales: require("./metalScales.svg").default,
    brightSteelMetalScales: require("./brightSteelMetalScales.svg").default,
    darkBronzeMetalScales: require("./darkBronzeMetalScales.svg").default,
    aureliumSteelMetalScales: require("./aureliumSteelMetalScales.svg").default,
    steelMetalScales: require("./steelMetalScales.svg").default,
    invarMetalScales: require("./invarMetalScales.svg").default,
    silveredIronMetalScales: require("./silveredIronMetalScales.svg").default,
    tigerIronMetalScales: require("./tigerIronMetalScales.svg").default,
    blueSteelMetalScales: require("./blueSteelMetalScales.svg").default,
    forestAureliumMetalScales: require("./forestAureliumMetalScales.svg").default,
    darkElectrumMetalScales: require("./darkElectrumMetalScales.svg").default,
    silver: require("./silver.svg").default,
    slag: require("./slag.svg").default,
    tin: require("./tin.svg").default,
    ore: require("./ore.svg").default,
    stone: require("./stone.svg").default,
    wood: require("./wood.svg").default,
    hide: require("./hide.svg").default,
    meat: require("./meat.svg").default
};



export const getAsset = assetId => {
    const x = require.context("./", true, /\.svg$/);
    console.log(x.keys());
    return assets[assetId] || "";
};
