import React from "react";
import EditableText from "./EditableText";

export default function PersonalDetail(props) {

    return (
        <div className={"personal-detail"}>
            <EditableText className={"title"} data={props.title} isSelected={false}/>
            <EditableText className={"detail"} data={props.detail} isSelected={false}/>
        </div>
    )
}