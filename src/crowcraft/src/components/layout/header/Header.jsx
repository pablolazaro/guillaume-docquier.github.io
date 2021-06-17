import "./Header.css";

import logo from "./logo.svg";

export const Header = ({ className }) => (
    <div className={className + " flex items-center bg-marine bb bw1"}>
        <img src={logo} alt="Crowcraft logo" className="h-50 mr2" />
        <div className="tag fw5">alpha</div>
    </div>
);
