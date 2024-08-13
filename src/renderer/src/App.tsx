import "./index.css";
import RouterConfigs from "./routes/route-configs";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <RouterConfigs/>
            </BrowserRouter>
        </>
    )
}

export default App
