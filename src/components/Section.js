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
        props.onDeleteButtonClick(props.id);
    }

    function handleAddSubsectionButton() {
        props.addSubsection(props.id)
    }

    function handleSectionTitleChange(event) {
        props.onChange(event, props.id);
    }


    const subSectionsData = props.subsections.map(item => {
        return <SubSection onDelete={props.onSubsectionDelete}
                           onChange={props.onSubsectionChange}
                           key={item.id}
                           id={item.id}
                           date={item.date}
                           title={item.title}
                           detail={item.detail}
                           sectionID={props.id}
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