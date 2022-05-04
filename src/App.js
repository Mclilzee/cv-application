import Header from "./components/Header"
import React from "react";
import {nameData, generalInformationData} from "./data/placeHolder"


function App() {

    const [fullName, setFullName] = React.useState(() => nameData)
    const [personalData, setPersonalData] = React.useState(() => generalInformationData)

    React.useEffect(() => {
        document.addEventListener("click", toggleEditMode)
        document.addEventListener("keydown", toggleEditMode)

        function toggleEditMode(event) {
            event.stopPropagation()
            if (event.type === "keydown" && event.key !== "Escape") {
                return;
            }

            const eventId = event.target.id;

            setFullName((prevName) => {
                return {...prevName, isSelected: prevName.id === eventId}
            })

            setPersonalData(prevArray => {
                return prevArray.map(({personalTitle, personalDetail}) => {

                    return {
                        personalTitle: {...personalTitle, isSelected: personalTitle.id === eventId},
                        personalDetail: {...personalDetail, isSelected: personalDetail.id === eventId}
                    }

                })
            })


        }

        return (() => {
            document.removeEventListener("click", toggleEditMode)
            document.removeEventListener("keypress", toggleEditMode)

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
