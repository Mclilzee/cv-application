import React from "react";
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"
import EditableText from "./EditableText";
import Picture from "./Picture";
import uniqid from "uniqid"

export default function Header(props) {

    const [fullName, setFullName] = React.useState(() => {
            return localStorage.getItem("fullName") || "";
        }
    );
    const [personalData, setPersonalData] = React.useState(getPersonalData);

    function getPersonalData() {
        const localObject = JSON.parse(localStorage.getItem("personalData"));

        if (localObject !== null) {
            return localObject;
        }

        return [
            {
                title: "Address :",
                detail: "Berlin Str. 221",
                id: uniqid()
            },
            {
                title: "Phone :",
                detail: "+49 153 232212",
                id: uniqid()
            },
            {
                title: "E-mail :",
                detail: "example@hotmail.com",
                id: uniqid()
            }
        ]

    }

    React.useEffect(() => {
        const jsonString = JSON.stringify(personalData);
        localStorage.setItem("personalData", jsonString);
    }, [personalData])

    React.useEffect(() => {
        localStorage.setItem("fullName", fullName);
    }, [fullName])

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

    function onDelete(id) {
        setPersonalData(prevData => {
            return prevData.filter(item => {
                return id !== item.id;
            })
        })
    }

    function handleAddButton() {
        const newInformation = {
            title: "",
            detail: "",
            id: uniqid()
        }

        setPersonalData(prevState => [...prevState, newInformation])
    }

    const informationArray = personalData.map(item => {
        return <PersonalDetail key={item.id}
                               id={item.id}
                               onDelete={onDelete}
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
            <Picture/>
            <div className={"personal-information"}>
                {informationArray}
                <img className="add-button" onClick={handleAddButton} src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}