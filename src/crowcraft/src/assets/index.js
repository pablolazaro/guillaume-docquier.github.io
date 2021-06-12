import aurelium from "./aurelium.svg";
import coal from "./coal.svg";
import copper from "./copper.svg";
import etherealDust from "./etherealDust.svg";
import iron from "./iron.svg";
import lacingSinew from "./lacingSinew.svg";
import leatherPadding from "./leatherPadding.svg";
import mailCoif from "./mailCoif.svg";
import metalScales from "./metalScales.svg";
import silver from "./silver.svg";
import slag from "./slag.svg";
import tin from "./tin.svg";
import ore from "./ore.svg";
import stone from "./stone.svg";
import wood from "./wood.svg";
import hide from "./hide.svg";
import meat from "./meat.svg";

const assets = {
    aurelium,
    coal,
    copper,
    etherealDust,
    iron,
    lacingSinew,
    leatherPadding,
    mailCoif,
    metalScales,
    silver,
    slag,
    tin,
    ore,
    stone,
    wood,
    hide,
    meat
};

export const getAsset = assetId => {
    return assets[assetId] || "";
};
