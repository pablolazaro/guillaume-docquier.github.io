import { Choice } from "./Choice";

export const CompletedStep = ({ title, choices }) => (
    <div>
        <div className="mb1">
            {title}
        </div>
        <div>
            {choices.map(choice => <div className="mr2"><Choice name={choice.name} /></div>)}
        </div>
    </div>
);
