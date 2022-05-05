import React from "react";
import EditableText from "./EditableText";
import Image from "../assets/images/photo-placeholder.jpg"
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"

export default function Header(props) {

    const [fullName, setFullName] = React.useState(() => "Joe Shmoe");


    function handleNameChange(text, index) {
        setFullName(text);
    }

    return (
        <div className="header">
            <EditableText onChange={handleNameChange} className="fullName" text={fullName}/>
            <img src={Image} alt={"person"}/>
            <div className={"personal-information"}>
                <PersonalDetail/>
                <img src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}