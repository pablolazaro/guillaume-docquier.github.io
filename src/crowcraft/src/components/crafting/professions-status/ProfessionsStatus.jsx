import "./ProfessionsStatus.css";

import { Professions } from "models";
import { getAsset } from "data";
import { String } from "utils";

const professionsStatus = {
    [Professions.Alchemist]: false,
    [Professions.Armorsmith]: true,
    [Professions.Jewelcrafter]: false,
    [Professions.Leatherworker]: true,
    [Professions.Necromancer]: false,
    [Professions.Runemaker]: false,
    [Professions.Stonemason]: false,
    [Professions.Woodworker]: true
};

export const ProfessionsStatus = () => {
    return (
        <div>
            <div className="mb2 f3 fw5">Implemented professions</div>
            <div className="flex items-center">
                {Object.entries(professionsStatus).map(([profession, isReady]) => (
                    <div className="mr2 relative" key={profession}>
                        <div className="w6 h6 flex items-center justify-center">
                            <img src={getAsset(profession)} alt={String.capitalize(profession)} title={String.capitalize(profession)} />
                        </div>
                        <div className={isReady ? "checkmark" : "cross"}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
