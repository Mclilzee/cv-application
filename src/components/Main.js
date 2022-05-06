import React from "react";
import Section from "./Section";

export default function Main(props) {

    const [sectionsArray, setSectionsArray] = React.useState(() => {
        return ["Education"]
    });


    function handleAddSectionButton() {
        setSectionsArray(prevState => {
            return [...prevState, ""]
        })
    }

    function handleSectionNameChange(event, index) {
        const text = event.target.value;
        setSectionsArray(prevState => {
            return prevState.map((item, itemIndex) => {
                return index === itemIndex ? text : item;
            })
        })
    }

    function handleSectionDeleteButton(index) {
        setSectionsArray(prevState => {
            return prevState.filter((item, itemIndex) => {
                return index !== itemIndex;
            })
        })
    }

    const sectionsData = sectionsArray.map((item, index) => {
        return <Section onDeleteButtonClick={handleSectionDeleteButton} onChange={handleSectionNameChange} key={index}
                        index={index} text={item}/>
    })

    return (
        <div className={"sections-container"}>
            {sectionsData}
            <button onClick={handleAddSectionButton} className={"add-section"}>Add Section</button>
        </div>

    )
}