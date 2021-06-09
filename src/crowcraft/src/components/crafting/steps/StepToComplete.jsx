import { Option } from "./Option";

const vowels = ["a", "e", "i", "o", "u"]

export const StepToComplete = ({ name, options, onStepCompleted }) => (
    <div>
        <div className="mb1">
            Choose {vowels.includes(name[0]) ? "an" : "a"} {name}
        </div>
        <div className="flex">
            {options.map(option => <div key={option.id} className="mr2" onClick={() => onStepCompleted(option)}><Option name={option.name} /></div>)}
        </div>
    </div>
);
