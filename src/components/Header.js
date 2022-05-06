import React from "react";
import Image from "../assets/images/photo-placeholder.jpg"
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"

export default function Header(props) {

    const [fullName, setFullName] = React.useState(() => "");
    const [personalData, setPersonalData] = React.useState(() => [
        {
            title: "Address :",
            detail: "Berlin Str. 221",
        },
        {
            title: "Phone :",
            detail: "+49 153 232212"
        },
        {
            title: "E-mail :",
            detail: "example@hotmail.com"
        }
    ]);

    function handleNameChange(event) {
        let newName = event.target.value;
        setFullName(newName)
    }

    function handleInformationChange(event) {
        const index = Number(event.target.id);
        const text = event.target.value;
        const type = event.target.className;

        setPersonalData(prevData => {
            return prevData.map((item, itemIndex) => {
                return itemIndex === index ? {...item, [type]: text} :
                    {...item}
            })
        })
    }

    const informationArray = personalData.map((item, index) => {
        return <PersonalDetail index={index} title={item.title} detail={item.detail}
                               onChange={handleInformationChange}/>
    })

    return (
        <div className="header">
            <input type="text" placeholder={"Full Name"} onChange={handleNameChange} className="fullName"
                   value={fullName}/>
            <img src={Image} alt={"person"}/>
            <div className={"personal-information"}>
                {informationArray}
                <img src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}