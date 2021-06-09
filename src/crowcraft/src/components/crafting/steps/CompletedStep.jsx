import { Choice } from "./Choice";
import { String } from "utils";

export const CompletedStep = ({ name, choice }) => (
    <div>
        <div className="mb1">
            {String.capitalize(name)}
        </div>
        <div>
            <Choice name={choice.name} />
        </div>
    </div>
);
