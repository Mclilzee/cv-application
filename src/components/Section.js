import React from "react";
import SubSection from "./SubSection";
import EditableText from "./EditableText";
import deleteButton from "../assets/buttons/delete-button.svg"
import addButton from "../assets/buttons/add-button.svg"

export default function Section(props) {

    const [subSectionsArray, setSubsectionsArray] = React.useState(() => {
        return [
            {
                date: "",
                title: "",
                detail: ""
            }
        ]
    })

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

    function handleAddSectionButton() {
        setSubsectionsArray(prevState => {
            const newObject = {
                date: "",
                title: "",
                detail: ""
            }
            return [...prevState, newObject]
        })
    }

    function handleSectionTitleChange(event) {
        props.onChange(event, props.index);
    }

    function handleSubsectionChange(event, index) {
        const type = event.target.className;
        const text = event.target.value;

        setSubsectionsArray(prevState => {
            return prevState.map((item, itemIndex) => {
                return index === itemIndex ? {...item, [type]: text} : item;
            })
        })
    }

    function handleSubSectionDeleteButton(index) {
        setSubsectionsArray(prevState => {
            return prevState.filter((item, itemIndex) => {
                return index !== itemIndex;
            })
        })
    }

    const subSectionsData = subSectionsArray.map((item, index) => {
        return <SubSection onDelete={handleSubSectionDeleteButton}
                           onChange={handleSubsectionChange}
                           key={index}
                           index={index}
                           date={item.date}
                           title={item.title}
                           detail={item.detail}
        />
    })

    const deleteButtonStyle = {
        visibility: displayDeleteSectionButton ? "" : "hidden"
    }

    return (
        <section>
            <div onMouseOver={handleMouseOverEvent} onMouseOut={handleMouseOutEvent} className={"title-container"}>
                <img onClick={handleDeleteButtonClick}
                     style={deleteButtonStyle}
                     className={"delete-button"}
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
                 onClick={handleAddSectionButton}/>
        </section>
    )
}