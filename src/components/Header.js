import React from "react";
import Image from "../assets/images/photo-placeholder.jpg"
import PersonalDetail from "./PersonalDetail";
import addButton from "../assets/buttons/add-button.svg"

export default function Header(props) {

    const [personalDetail, setPersonalDetail] = React.useState(() => {
        return [
            {
                title: "Address :",
                detail: "Fried street 22"
            },
            {
                title: "Phone :",
                detail: "2032323"
            },
            {
                title: "E-mail :",
                detail: "eating.monster@gobbler.dip"
            }
        ]
    })

    const details = personalDetail.map(item => {
        return <PersonalDetail title={item.title} detail={item.detail}/>
    })

    return (
        <div className="header">
            <div className="fullName">{"Chicken Nugget"}</div>
            <img src={Image} alt={"person"}/>
            <div className={"personal-information"}>
                {details}
                <img src={addButton} alt={"add button"}/>
            </div>
            <div className={"line-break"}/>
        </div>
    )
}