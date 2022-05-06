import React from "react";
import SubSection from "./SubSection";

export default function Section(props) {

    const [subSectionsArray, setSubsectionsArray] = React.useState(() => {
        return [
            {
                date: "2015 - 2016",
                title: "High-school",
                detail: "finished highschool teehee"
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

    const subSectionsData = subSectionsArray.map(item => {
        return <SubSection date={item.date} title={item.title} detail={item.detail}/>
    })

    return (
        <section>
            <h1>{props.text}</h1>
            <div className={"subsections-container"}>
                {subSectionsData}
            </div>
            <button onClick={handleClick}>Add subsection</button>
        </section>
    )
}