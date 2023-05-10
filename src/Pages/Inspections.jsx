import { useState } from "react";
import { Card } from "react-bootstrap";
import FormInspect from "../Components/FormInspect";
import Inspect from "../Components/Inspect";

export default function Inspections() {

    const [inspect, setInspect] = useState([{
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
            <FormInspect addInspect={addInspect} />
            <div>
                {inspect.map((inspect, index) => (
                <Card>
                <Card.Body>
                    <Inspect
                    key={index}
                    index={index}
                    inspect={inspect}
                    markInspect={markInspect}
                    deleteInspect={deleteInspect}
                    />
                </Card.Body>
                </Card>
            ))}
            </div>


    
            
        </div>
    );

}

