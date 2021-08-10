import "./global.css";
import { Crafting } from "./components/crafting";
import { Layout } from "./components/layout";
import { QueryParamProvider } from "use-query-params";

const App = () => (
    <QueryParamProvider>
        <Layout>
            <Crafting />
        </Layout>
    </QueryParamProvider>

);

export default App;
