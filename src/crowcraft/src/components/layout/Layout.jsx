import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";

export const Layout = ({ children }) => (
    <div className="bg-charcoal peach-puff">
        <Header className="h5 nmb5 ph7" />
        <Content className="flex pv5 pl6 pr7 min-vh-100">
            {children}
        </Content>
        <Footer className="h5 nmt5 ph7" />
    </div>
);
