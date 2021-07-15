import { Professions, Rarities } from "models";
import { getAsset } from "data";
import { String } from "utils";
import { useState } from "react";

const NONE = "none";
const Type = {
    DISCIPLINE: "discipline",
    BELT: "belt",
}

export const CrafterConfiguration = ({ onConfigurationChanged }) => {
    const [configuration, setConfiguration] = useState(Object.values(Professions).reduce((config, profession) => {
        config[profession] = {
            [Type.DISCIPLINE]: NONE,
            [Type.BELT]: NONE
        }

        return config;
    }, {}));

    const handleProfessionSettingChanged = (profession, newProfessionSetting) => {
        const newConfiguration = {...configuration};
        newConfiguration[profession] = newProfessionSetting;

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
        </div>
    );
};

const ProfessionSetting = ({ profession, professionSetting, onProfessionSettingChanged }) => {
    const handleChanged = type => e => {
        onProfessionSettingChanged(profession, {...professionSetting, [type]: e.target.value})
    }

    return (
        <div className="flex items-center">
            <div className="h4 w4 mr2">
                <img src={getAsset(profession)} alt={String.capitalize(profession)} title={String.capitalize(profession)} />
            </div>
            <div className="mr2">
                <div>Discipline</div>
                <select className="peach-puff bg-marine pointer" onChange={handleChanged(Type.DISCIPLINE)} defaultValue={professionSetting[Type.DISCIPLINE]}>
                    <option value={NONE}>None</option>
                    {Object.values(Rarities).map(rarity => (
                        <option key={rarity.name} value={rarity.name}>
                            {String.capitalize(rarity.name)}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <div>Belt</div>
                <select className="peach-puff bg-marine pointer" onChange={handleChanged(Type.BELT)} defaultValue={professionSetting[Type.BELT]}>
                    <option value={NONE}>None</option>
                    {Object.values(Rarities).map(rarity => (
                        <option key={rarity.name} value={rarity.name}>
                            {String.capitalize(rarity.name)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}