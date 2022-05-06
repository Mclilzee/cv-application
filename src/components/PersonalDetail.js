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
        return <div id={index} className={"personal-detail"}>
            <input placeholder={"Title"} id={index} onChange={handleChange} className={"title"} value={item.title}/>
            <input placeholder={"Detail"} id={index} onChange={handleChange} className={"detail"} value={item.detail}/>
        </div>
    })

    return (
        <>
            {informationArray}
        </>
    )
}