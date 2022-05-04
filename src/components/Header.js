import React from "react";
import EditableText from "./EditableText";
import Image from "../assets/images/photo-placeholder.jpg"
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"

export default function Header({fullName, personalData}) {

    const details = personalData.map(item => {
        return <PersonalDetail title={item.personalTitle} detail={item.personalDetail}/>
    })

    return (
        <div className="header">
            <EditableText className="fullName" data={fullName}/>
            <img src={Image} alt={"person"}/>
            <div className={"personal-information"}>
                {details}
                <img src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}