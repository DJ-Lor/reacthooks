import { useState } from "react";

export default function Inspections() {

    const {inspect, setInspect} = useState([{
        id: 0,
        inspectText: "sample inspect",
        isDone: false
    }]);

    const addInspect = text => {
        const newInspect = [...inspect, {text}];
        setInspect(newInspect);
    }

    const markInspect = index => {
        const newInspect = [...inspect];
        newInspect[index].isDone = true;
        setInspect(newInspect);

    }

    const deleteInspect = index => {
        const newInspect = [...inspect];
        newInspect.splice(index,1);
        setInspect(newInspect);
    }


    return (
        <div>
            <h1> Here are your list of inspections </h1>
            <ul>
                <li>
                    inspection 1
                </li>
                <li>
                    inspection 2
                </li>
                <li>
                    inspection 3
                </li>
            </ul>
        </div>
    );

}