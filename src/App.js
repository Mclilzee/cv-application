import Header from "./components/Header"
import React from "react";
import {nameData, generalInformationData} from "./data/placeHolder"


function App() {

    const [fullName, setFullName] = React.useState(() => nameData)
    const [personalData, setPersonalData] = React.useState(() => generalInformationData)


    return (
        <div className="paper">
            <Header personalData={personalData}
                    fullName={fullName}
            />
        </div>
    );
}

export default App;
