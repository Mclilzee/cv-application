import React from "react";
import SubSection from "./SubSection";
import EditableText from "./EditableText";
import deleteButton from "../assets/buttons/delete-button.svg"

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

    function handleAddSectionButton() {
        setSubsectionsArray(prevState => {
            const newObject = {
                date: "112 - 2016",
                title: "war",
                detail: "staying at home"
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

    function handleMouseOverTitle() {

    }

    const subSectionsData = subSectionsArray.map((item, index) => {
        return <SubSection onChange={handleSubsectionChange}
                           key={index}
                           index={index}
                           date={item.date}
                           title={item.title}
                           detail={item.detail}
        />
    })

    const deletebuttonStyle = {
        visibility: displayDeleteSectionButton ? "" : "hidden"
    }

    return (
        <section>
            <div onMouseOver={handleMouseOverEvent} onMouseOut={handleMouseOutEvent} className={"title-container"}>
                <img style={deletebuttonStyle} className={"delete-button"} src={deleteButton} alt={"delete button"}/>
                <EditableText placeholder={"Header"} className={"title"} onChange={handleSectionTitleChange}
                              text={props.text}/>
            </div>
            <div className={"container"}>
                {subSectionsData}
            </div>
            <button className={"add-subsection"} onClick={handleAddSectionButton}>Add subsection</button>
        </section>
    )
}