import { Choice } from "./Choice";
import { String } from "utils";

export const CompletedStep = ({ name, choice, onStepCanceled }) => (
    <div>
        <div className="mb1">
            {String.capitalize(name)}
        </div>
        <div>
            <Choice name={choice.name} onChoiceCanceled={onStepCanceled} />
        </div>
    </div>
);
