import { useEffect } from "react";
import Form from "./components/Form";

function App() {
    useEffect(() => {
        console.log("from root component");
    }, []);
    return (
        <div
            style={{
                width: "100vw",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Form />
        </div>
    );
}

export default App;
