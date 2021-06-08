import logo from "./logo.png";

export const Header = ({ className }) => (
    <div className={className + " flex items-center bg-mauve-taupe"}>
        <img src={logo} alt="Crowcraft logo" className="h-100" />
        <div className="pl3" >Crowcraft</div>
    </div>
);
