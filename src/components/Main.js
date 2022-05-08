import React from "react";
import Section from "./Section";


export default function Main(props) {

    const [sectionsArray, setSectionsArray] = React.useState(() => {
        return [{
            header: "Education",
            subsections: [
                {
                    date: "",
                    title: "",
                    detail: ""
                }
            ]
        }]
    });


    function handleAddSectionButton() {
        setSectionsArray(prevState => {
            return [...prevState, {
                header: "",
                subsections: [{
                    date: "",
                    title: "",
                    detail: "",
                }]
            }]
        })
    }

    function handleSectionNameChange(event, index) {
        const text = event.target.value;
        setSectionsArray(prevState => {
            return prevState.map((item, itemIndex) => {
                return index === itemIndex ? {...item, header: text} : item;
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

    function handleAddSubsectionButton(index) {
        setSectionsArray(prevState => {
            return prevState.map((item, itemIndex) => {
                return index === itemIndex ? {
                    ...item, subsections: [...item.subsections, {
                        date: "",
                        title: "",
                        detail: "",
                    }]
                } : item
            })
        })
    }

    const sectionsData = sectionsArray.map((item, index) => {
        return <Section addSubsection={handleAddSubsectionButton} onDeleteButtonClick={handleSectionDeleteButton}
                        onChange={handleSectionNameChange} key={index}
                        index={index} text={item.header} subsections={item.subsections}/>
    })

    return (
        <div className={"sections-container"}>
            {sectionsData}
            <button onClick={handleAddSectionButton} className={"add-section"}>Add Section</button>
        </div>

    )
}