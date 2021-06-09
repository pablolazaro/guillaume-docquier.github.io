import { String } from "utils";

export const Choice = ({ name, onChoiceCanceled }) => (
    <div className="bg-verdigris pa2 dib">
        <div className="flex items-center space-between">
            <div>{String.capitalize(name)}</div>
            <div className="pl2 bittersweet fw8 pointer" onClick={onChoiceCanceled}>X</div>
        </div>
    </div>
);
