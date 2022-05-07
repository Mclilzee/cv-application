import React from "react";
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"
import EditableText from "./EditableText";
import Picture from "./Picture";

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

    function handleInformationChange(event, index) {
        const text = event.target.value;
        const type = event.target.className;

        setPersonalData(prevData => {
            return prevData.map((item, itemIndex) => {
                return itemIndex === index ? {...item, [type]: text} :
                    {...item}
            })
        })
    }

    function onDelete(index) {
        setPersonalData(prevData => {
            return prevData.filter((item, itemIndex) => {
                return index !== itemIndex;
            })
        })
    }

    function handleAddButton() {
        const newInformation = {
            title: "",
            detail: ""
        }

        setPersonalData(prevState => [...prevState, newInformation])
    }

    const informationArray = personalData.map((item, index) => {
        return <PersonalDetail key={index}
                               onDelete={onDelete}
                               index={index}
                               title={item.title}
                               detail={item.detail}
                               onChange={handleInformationChange}
        />
    })

    return (
        <div className="header">
            <EditableText type={"text"}
                          placeholder={"Full Name"}
                          onChange={handleNameChange}
                          className="fullName"
                          text={fullName}/>
            <Picture />
            <div className={"personal-information"}>
                {informationArray}
                <img className="add-button" onClick={handleAddButton} src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}