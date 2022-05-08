import Header from "./components/Header"
import React from "react";
import Main from "./components/Main";
import pdfIcon from "./assets/images/pdf-icon.svg"
import EditableText from "./components/EditableText";
import {format} from "date-fns"

function App() {

    const [currentDate, setCurrentDate] = React.useState(getCurrentDate)

    function getCurrentDate() {
        const today = new Date();
        return format(today, "dd/MM/yyyy")
    }

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

    function handleDateChange(event) {
        setCurrentDate(event.target.value);
    }

    return (
        <div className="paper">
            <button className={"download-button"} onClick={() => window.print()}>
                Download
                <img src={pdfIcon}
                     alt={"icon of pdf"}
                />
            </button>
            <Header/>
            <Main/>
            <EditableText className={"current-date"} onChange={handleDateChange} text={currentDate}/>
        </div>
    );
}


export default App;
