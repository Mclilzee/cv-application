import Header from "./components/Header"
import React from "react";
import Main from "./components/Main";


function App() {

    React.useEffect(() => {

        function handleKeyPress(event) {

            if (event.key !== "Escape" && event.key !== "Enter") {
                return;
            }

            if (event.key === "Escape") {
                const textAreas = document.querySelectorAll("textarea");
                textAreas.forEach(textArea => textArea.blur());
            }

            blurInputs()

        }

        function blurInputs() {
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => input.type !== "url" ? input.blur() : "")
        }

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        }
    }, [])

    return (
        <div className="paper">
            <button className={"download-button"} onClick={() => window.print()}>Download</button>
            <Header/>
            <Main/>
        </div>
    );
}


export default App;
