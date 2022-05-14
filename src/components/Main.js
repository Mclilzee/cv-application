import React from "react";
import Section from "./Section";
import uniqid from "uniqid";


export default function Main(props) {

    const [sectionsArray, setSectionsArray] = React.useState(() => {
        return JSON.parse(localStorage.getItem("main")) || [{
            header: "Education",
            id: uniqid(),
            subsections: [
                {
                    date: "2015 - 2016",
                    title: "Highschool",
                    detail: "Finished highschool degree with the score of 90%",
                    id: uniqid()
                }
            ]
        }]
    });

    React.useEffect(() => {
        const jsonString = JSON.stringify(sectionsArray)
        localStorage.setItem("main", jsonString);
    }, [sectionsArray])


    function handleAddSectionButton() {
        setSectionsArray(prevState => {
            return [...prevState, {
                header: "",
                id: uniqid(),
                subsections: [{
                    date: "",
                    title: "",
                    detail: "",
                    id: uniqid()
                }]
            }]
        })
    }

    function handleSectionNameChange(event, id) {
        const text = event.target.value;
        setSectionsArray(prevState => {
            return prevState.map(item => {
                return id === item.id ? {...item, header: text} : item;
            })
        })
    }

    function handleSectionDeleteButton(id) {
        setSectionsArray(prevState => {
            return prevState.filter(item => {
                return id !== item.id;
            })
        })
    }

    function handleAddSubsectionButton(id) {
        setSectionsArray(prevState => {
            return prevState.map(item => {
                return id === item.id ? {
                    ...item, subsections: [...item.subsections, {
                        date: "",
                        title: "",
                        detail: "",
                        id: uniqid()
                    }]
                } : item
            })
        })
    }

    function handleSubsectionChange(event, sectionID, subsectionID) {
        const type = event.target.className;
        const text = event.target.value;

        setSectionsArray(prevState => {
            return prevState.map(item => {
                return item.id !== sectionID ? item :
                    {
                        ...item, subsections: item.subsections.map(item => {
                            return item.id === subsectionID ? {...item, [type]: text} : item
                        })
                    }
            })
        })
    }

    function handleSubSectionDeleteButton(sectionID, subsectionID) {
        setSectionsArray(prevState => {
            return prevState.map(item => {
                return sectionID !== item.id ? item :
                    {
                        ...item, subsections: item.subsections.filter(subsectionItem => {
                            return subsectionItem.id !== subsectionID
                        })
                    }
            })
        })
    }

    const sectionsData = sectionsArray.map(item => {
        return <Section addSubsection={handleAddSubsectionButton}
                        onSubsectionDelete={handleSubSectionDeleteButton}
                        onSubsectionChange={handleSubsectionChange}
                        onDeleteButtonClick={handleSectionDeleteButton}
                        onChange={handleSectionNameChange}
                        key={item.id}
                        id={item.id}
                        text={item.header}
                        subsections={item.subsections}
        />
    })

    return (
        <div className={"sections-container"}>
            {sectionsData}
            <button onClick={handleAddSectionButton} className={"add-section"}>Add Section</button>
        </div>

    )
}