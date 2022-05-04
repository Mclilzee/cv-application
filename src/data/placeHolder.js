import uniqid from "uniqid"


const nameData = {
    text: "Chicken Nuggets",
    isSelected: false,
    id: uniqid()
}

const generalInformationData = [
    {
        personalTitle: {
            text: "Address:",
            isSelected: false,
            id: uniqid()
        },
        personalDetail: {
            text: "Hallway Street 231",
            isSelected: false,
            id: uniqid()
        }
    },
    {
        personalTitle: {
            text: "Phone :",
            isSelected: false,
            id: uniqid()
        },
        personalDetail: {
            text: "238729031",
            isSelected: false,
            id: uniqid()
        }
    },
    {
        personalTitle: {
            text: "E-mail :",
            isSelected: false,
            id: uniqid()
        },
        personalDetail: {
            text: "someEmail@hotmail.com",
            isSelected: false,
            id: uniqid()
        }
    }
]


export {nameData, generalInformationData}