import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";

export const Layout = ({ children }) => (
    <div className="bg-charcoal peach-puff">
        <Header className="h3 nmb5 ph7" />
        <Content className="pv5 ph7 min-vh-100">
            {children}
        </Content>
        <Footer className="h3 nmt5 ph7" />
    </div>
);
