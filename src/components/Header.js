import React from "react";
import Image from "../assets/images/photo-placeholder.jpg"
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"

export default function Header(props) {

    const [fullName, setFullName] = React.useState(() => "Joe Shmoe");


    function handleNameChange(event) {
        const newName = event.target.textContent;
        setFullName(newName);
    }

    return (
        <div className="header">
            <div contentEditable onInput={handleNameChange} className="fullName">{fullName}</div>
            <img src={Image} alt={"person"}/>
            <div className={"personal-information"}>
                <PersonalDetail/>
                <img src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}