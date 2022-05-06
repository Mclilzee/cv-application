import React from "react";
import Section from "./Section";

export default function Main(props) {

    const [sectionsArray, setSectionsArray] = React.useState(() => {
        return ["Education", "Work Experience"]
    });

    const sectionsData = sectionsArray.map(item => {
        return <Section text={item}/>
    })

    return (
        <div className={"sections-container"}>
            {sectionsData}
        </div>

    )
}