import "./TextInput.css";

export const TextInput = ({ id, name, placeholder = "", onInputChanged }) => (
    <input className="text-input" type="text" id={id} name={name} placeholder={placeholder} onKeyUp={onInputChanged} />
);