import React from "react";
import Section from "./Section";

export default function Main(props) {

    const [sectionsArray, setSectionsArray] = React.useState(() => {
        return ["Education"]
    });


    function handleClick() {
        setSectionsArray(prevState => {
            return [...prevState, ""]
        })
    }

    function handleChange(event, index) {
        const text = event.target.value;
        setSectionsArray(prevState => {
            return prevState.map((item, itemIndex) => {
                return index === itemIndex ? text : item;
            })
        })
    }

    const sectionsData = sectionsArray.map((item, index) => {
        return <Section onChange={handleChange} key={index} index={index} text={item}/>
    })

    return (
        <div className={"sections-container"}>
            {sectionsData}
            <button onClick={handleClick} className={"add-section"}>Add Section</button>
        </div>

    )
}