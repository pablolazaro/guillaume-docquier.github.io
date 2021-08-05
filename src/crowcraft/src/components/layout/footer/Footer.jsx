export const Footer = ({ className }) => (
    <div className={className + " bg-marine"}>
        <div className="flex justify-between items-center bg-marine mh-auto mw9 h-100">
            <div className="mobile-hide | w-100 mw5"></div>
            <div className="flex flex-column justify-between f7 h-100 pv2">
                <div className="tc">Crowcraft is sponsored by <a href="https://crowfall.com/en-US/guilds/search?name=valeria#VAL" target="_blank" rel="noopener noreferrer">Valeria Gaming</a></div>
                <div className="tc">Made with ❤ by <a href="https://github.com/Guillaume-Docquier/guillaume-docquier.github.io/projects/1" target="_blank" rel="noopener noreferrer">Guike</a></div>
                <div className="tc">Special thanks to Upem!</div>
            </div>
            <div className="w-100 mw5 flex justify-end">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="85SQD8DZ6X3HC" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="item_name" value="This will support Guike, the creator of Crowcraft" />
                    <input type="hidden" name="currency_code" value="CAD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="Donate via PayPal" alt="Donate with PayPal button" />
                </form>
            </div>
        </div>
    </div>
);
