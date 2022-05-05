import React from "react";
import EditableText from "./EditableText";

export default function PersonalDetail(props) {

    const [personalData, setPersonalData] = React.useState(() => [
        {
            title: "Address",
            detail: "Hallway Street 231",
        },
        {
            title: "Phone :",
            detail: "238729031"
        },
        {
            title: "E-mail :",
            detail: "someEmail@hotmail.com"
        }
    ]);

    function handleTitle(text, index) {
        setPersonalData(prevData => {
            return prevData.map((item, itemIndex) => {
                return itemIndex === index ? {...item, title: text} :
                    {...item}
            })
        })
    }

    function handleDetail(text, index) {
        setPersonalData(prevData => {
            return prevData.map((item, itemIndex) => {
                return itemIndex === index ? {...item, detail: text} :
                    {...item}
            })
        })
    }


    const informationArray = personalData.map((item, index) => {
        return <div key={index} className={"personal-detail"}>
            <EditableText index={index} onChange={handleTitle} className={"title"} text={item.title}/>
            <EditableText index={index} onChange={handleDetail} className={"detail"} text={item.detail}/>
        </div>
    })

    return (
        <>
            {informationArray}
        </>
    )
}