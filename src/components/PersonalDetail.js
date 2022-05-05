import React from "react";

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

    function handleChange(event) {
        const index = event.target.id;
        const text = event.target.textContent;
        const type = event.target.className;

        setPersonalData(prevData => {
            return prevData.map((item, itemIndex) => {
                return itemIndex === index ? {...item, [type]: text} :
                    {...item}
            })
        })
    }


    const informationArray = personalData.map((item, index) => {
        return <div className={"personal-detail"}>
            <div contentEditable id={index} onInput={handleChange} className={"title"}>{item.title}</div>
            <div contentEditable id={index} onInput={handleChange} className={"detail"}>{item.detail}</div>
        </div>
    })

    return (
        <>
            {informationArray}
        </>
    )
}