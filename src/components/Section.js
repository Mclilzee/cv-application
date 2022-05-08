import React from "react";
import SubSection from "./SubSection";
import EditableText from "./EditableText";
import deleteButton from "../assets/buttons/delete-button.svg"
import addButton from "../assets/buttons/add-button.svg"

export default function Section(props) {

    const [displayDeleteSectionButton, setDisplayDeleteSectionButton] = React.useState(() => false);

    function handleMouseOverEvent() {
        setDisplayDeleteSectionButton(true);
    }

    function handleMouseOutEvent() {
        setDisplayDeleteSectionButton(false)
    }

    function handleDeleteButtonClick() {
        props.onDeleteButtonClick(props.index);
    }

    function handleAddSubsectionButton() {
        props.addSubsection(props.index)
    }

    function handleSectionTitleChange(event) {
        props.onChange(event, props.index);
    }

    function handleSubsectionChange(event, index) {
        const type = event.target.className;
        const text = event.target.value;


    }

    function handleSubSectionDeleteButton(index) {

    }

    const subSectionsData = props.subsections.map((item, index) => {
        return <SubSection onDelete={handleSubSectionDeleteButton}
                           onChange={handleSubsectionChange}
                           key={index}
                           index={index}
                           date={item.date}
                           title={item.title}
                           detail={item.detail}
        />
    })


    return (
        <section>
            <div onMouseOver={handleMouseOverEvent} onMouseOut={handleMouseOutEvent} className={"title-container"}>
                <img onClick={handleDeleteButtonClick}
                     className={`delete-button ${displayDeleteSectionButton ? "visible" : "hidden"}`}
                     src={deleteButton}
                     alt={"delete button"}
                />
                <EditableText type={"text"}
                              placeholder={"Header"}
                              className={"title"}
                              onChange={handleSectionTitleChange}
                              text={props.text}/>
            </div>
            {subSectionsData}
            <img src={addButton} className={"add-subsection"} alt="add subsection button"
                 onClick={handleAddSubsectionButton}/>
        </section>
    )
}