import React from "react";
import Image from "../assets/images/photo-placeholder.jpg"
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"

export default function Header(props) {

    const [fullName, setFullName] = React.useState(() => "");


    function handleNameChange(event) {
        let newName = event.target.value;
        setFullName(newName)
    }

    return (
        <div className="header">
            <input placeholder={"Full Name"} onChange={handleNameChange} className="fullName" value={fullName}/>
            <img src={Image} alt={"person"}/>
            <div className={"personal-information"}>
                <PersonalDetail/>
                <img src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}