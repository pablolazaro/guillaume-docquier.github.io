import { Option } from "./Option";

export const StepToComplete = ({ title, options }) => (
    <div>
        <div className="mb1">
            {title}
        </div>
        <div className="flex">
            {options.map(option => <div className="mr2"><Option name={option.name} /></div>)}
        </div>
    </div>
);
