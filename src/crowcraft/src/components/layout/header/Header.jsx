import "./Header.css";

import logo from "./logo.svg";
import discord from "./discord.svg";

export const Header = ({ className }) => (
    <div className={className + " flex bg-marine bb bw1"}>
        <div className="flex justify-between items-center flex-wrap w-100 ph2 m0auto mw9">
            <div className="flex items-center pv3">
                <img src={logo} alt="Crowcraft logo" className="h2 mr2" />
                <div className="tag fw5 f7 pt2">BETA 6.540</div>
            </div>
            <div className="flex items-center pv3">
                <a className="mr4 w7 tc" href="https://discord.gg/Ju87JBQGJw" title="Join our Discord!" target="_blank" rel="noopener noreferrer">Found a bug or want to help?</a>
                <a className="w7" href="https://discord.gg/Ju87JBQGJw" target="_blank" rel="noopener noreferrer">
                    <img src={discord} alt="Discord logo" title="Join our Discord!" />
                </a>
            </div>
        </div>
    </div>
);
