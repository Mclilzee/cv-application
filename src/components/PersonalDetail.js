import React from "react";

export default function PersonalDetail(props) {

    return (
        <div className={"personal-detail"}>
            <div className={"title"}>{props.title}</div>
            <div className={"detail"}>{props.detail}</div>
        </div>
    )
}