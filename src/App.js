import Header from "./components/Header"
import React from "react";
import {nameData, generalInformationData} from "./data/placeHolder"


function App() {

    const [fullName, setFullName] = React.useState(() => nameData)
    const [personalData, setPersonalData] = React.useState(() => generalInformationData)

    React.useEffect(() => {
        document.addEventListener("click", toggleEditMode)
        document.addEventListener("keypress", toggleEditMode)

        function toggleEditMode(event) {
            event.stopPropagation()

            if (event.type === "keypress" && event.code !== "Enter") {
                return;
            }

            setFullName(prevName => {
                return prevName.id === event.target.id ?
                    {...prevName, isSelected: true} :
                    {...prevName}
            })

            console.log(fullName)
        }

        return (() => {
            document.body.removeEventListener("click", toggleEditMode)
        })
    }, [fullName])


    return (
        <div className="paper">
            <Header personalData={personalData}
                    fullName={fullName}
            />
        </div>
    );
}


export default App;
