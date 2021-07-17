import "./CrafterConfiguration.css";

import { Professions, Rarities } from "models";
import { getAsset } from "data";
import { String } from "utils";
import { useState } from "react";

const NONE = "none";
const MAX = Rarities.Legendary.name;
const Type = {
    DISCIPLINE: "discipline",
    BELT: "belt",
}

const initProfessionSettings = value => {
    return Object.values(Professions).reduce((config, profession) => {
        config[profession] = {
            [Type.DISCIPLINE]: value,
            [Type.BELT]: value
        }

        return config;
    }, {});
}

export const CrafterConfiguration = ({ onConfigurationChanged }) => {
    const [configuration, setConfiguration] = useState(initProfessionSettings(NONE));

    const handleProfessionSettingChanged = (profession, newProfessionSetting) => {
        const newConfiguration = { ...configuration };
        newConfiguration[profession] = newProfessionSetting;

        setConfiguration(newConfiguration);
        onConfigurationChanged(newConfiguration);
    }

    const setAll = value => () => {
        const newConfiguration = initProfessionSettings(value);
        setConfiguration(newConfiguration);
        onConfigurationChanged(newConfiguration);
    }

    return (
        <div className="flex flex-column">
            <div className="f3 fw6 mb2">Professions configuration</div>
            {Object.entries(configuration).map(([profession, professionSetting]) => (
                <div className="mb2" key={profession}>
                    <ProfessionSetting
                        profession={profession}
                        professionSetting={professionSetting}
                        onProfessionSettingChanged={handleProfessionSettingChanged} />
                </div>
            ))}
            <div className="flex justify-evenly mt2">
                <div className="config-action-button | pa3 mr3 bg-marine pointer" onClick={setAll(NONE)}>Clear All</div>
                <div className="config-action-button | pa3 bg-marine pointer" onClick={setAll(MAX)}>Max All</div>
            </div>
        </div>
    );
};

const ProfessionSetting = ({ profession, professionSetting, onProfessionSettingChanged }) => {
    const handleChanged = type => e => {
        onProfessionSettingChanged(profession, { ...professionSetting, [type]: e.target.value })
    }

    return (
        <div className="flex items-center">
            <div className="h4 w4 mr2">
                <img src={getAsset(profession)} alt={String.capitalize(profession)} title={String.capitalize(profession)} />
            </div>
            <div className="mr2">
                <div>Discipline</div>
                <select className="peach-puff bg-marine pointer" onChange={handleChanged(Type.DISCIPLINE)} value={professionSetting[Type.DISCIPLINE]}>
                    <option value={NONE}>None</option>
                    {Object.values(Rarities).filter(rarity => rarity.rank > 0).map(rarity => (
                        <option key={rarity.name} value={rarity.name}>
                            {String.capitalize(rarity.name)}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <div>Belt</div>
                <select className="peach-puff bg-marine pointer" onChange={handleChanged(Type.BELT)} value={professionSetting[Type.BELT]}>
                    <option value={NONE}>None</option>
                    {Object.values(Rarities).filter(rarity => rarity.rank > 1).map(rarity => (
                        <option key={rarity.name} value={rarity.name}>
                            {String.capitalize(rarity.name)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}