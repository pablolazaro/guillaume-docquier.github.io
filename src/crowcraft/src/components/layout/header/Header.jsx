import logo from "./logo.svg";

export const Header = ({ className }) => (
    <div className={className + " flex items-center bg-marine bb bw1"}>
        <img src={logo} alt="Crowcraft logo" className="h-50" />
    </div>
);
