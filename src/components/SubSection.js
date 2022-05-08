import React from "react";
import EditableText from "./EditableText";
import deleteButton from "../assets/buttons/delete-button.svg"

export default function SubSection(props) {
    const [displayButton, setDisplayButton] = React.useState(() => false);

    function handleMouseOver() {
        setDisplayButton(true)
    }

    function handleMouseOut() {
        setDisplayButton(false)
    }

    function handleChange(event) {
        props.onChange(event, props.sectionIndex, props.index);
    }

    function handleDeleteButtonClick() {
        props.onDelete(props.sectionIndex, props.index);
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={"subsection-container"}>
            <img
                onClick={handleDeleteButtonClick}
                className={`delete-button ${displayButton ? "visible" : "hidden"}`}
                src={deleteButton}
                alt={"delete button"}
            />
            <EditableText type={"text"} placeholder="Date" onChange={handleChange} className={"date"}
                          text={props.date}/>
            <EditableText type={"text"} placeholder="Title" onChange={handleChange} className={"title"}
                          text={props.title}/>
            <EditableText type={"textarea"} placeholder="Explain in details" onChange={handleChange}
                          className={"detail"}
                          text={props.detail}/>
        </div>
    )
}