import React from "react";
import SubSection from "./SubSection";
import EditableText from "./EditableText";

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

    function handleClick() {
        setSubsectionsArray(prevState => {
            const newObject = {
                date: "112 - 2016",
                title: "war",
                detail: "staying at home"
            }
            return [...prevState, newObject]
        })
    }

    function handleChange(event) {
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

    const subSectionsData = subSectionsArray.map((item, index) => {
        return <SubSection onChange={handleSubsectionChange}
                           key={index}
                           index={index}
                           date={item.date}
                           title={item.title}
                           detail={item.detail}
        />
    })

    return (
        <section>
            <EditableText placeholder={"Header"} className={"section-title"} onChange={handleChange} text={props.text}/>
            <div className={"subsections-container"}>
                {subSectionsData}
            </div>
            <button className={"add-subsection"} onClick={handleClick}>Add subsection</button>
        </section>
    )
}