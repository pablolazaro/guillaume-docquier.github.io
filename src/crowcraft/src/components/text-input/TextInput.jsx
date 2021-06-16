import "./TextInput.css";

import SearchIcon from '@material-ui/icons/Search';

export const TextInput = ({ id, name, placeholder = "", onInputChanged }) => (
    <div className="flex items-center relative charcoal">
        <SearchIcon className="absolute pl1" />
        <input className="text-input" type="text" id={id} name={name} placeholder={placeholder} onKeyUp={onInputChanged} />
    </div>
);