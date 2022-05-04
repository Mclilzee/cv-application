import React from "react";
import EditableText from "./EditableText";

export default function PersonalDetail(props) {

    return (
        <div className={"personal-detail"}>
            <EditableText className={"title"} text={props.title} isSelected={false}/>
            <EditableText className={"detail"} text={props.detail} isSelected={false}/>
        </div>
    )
}