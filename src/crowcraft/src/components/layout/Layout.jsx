import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";

export const Layout = ({ children }) => (
    <div className="bg-charcoal peach-puff">
        <Header className="minh5 nmb5" />
        <Content className="flex pv5 min-vh-100 ph2 mh-auto mw9">
            {children}
        </Content>
        <Footer className="h5 nmt5" />
    </div>
);
