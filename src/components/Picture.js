import React from "react";
import placeHolderImage from "../assets/images/photo-placeholder.jpg"

export default function Picture(props) {

    const [profilePicture, setProfilePicture] = React.useState(() => placeHolderImage)

    function uploadProfilePicture(event) {
        //Todo allow user to choose f
    }

    return (
        <label className={"profile-picture"} form="image">
            <input onChange={uploadProfilePicture}
                   accept="image/*"
                   type="file"
                   name="image"
                   style={{display: "none"}}/>
            <img src={profilePicture} alt={"person"}/>
        </label>
    )
}