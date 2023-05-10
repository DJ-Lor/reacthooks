import '../form.css'
import { useState } from "react";
import FormInspect from "../Components/FormInspect";
import Inspect from "../Components/Inspect";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Inspections() {

    const [inspect, setInspect] = useState([{
        id: 0,
        inspectText: "sample inspect",
        isDone: false,
        highPriority: false
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

    const markPriority = index => {
        const highInspect = [...inspect];
        highInspect[index].highPriority = true;
        setInspect(highInspect);
    }

    const sortedInspect = [...inspect].sort((a, b) => {
        if (a.highPriority && !b.highPriority) {
          return -1;
        }
        if (!a.highPriority && b.highPriority) {
          return 1;
        }
        return 0;
      });

    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center mb-4"> Here are your list of inspections </h1>
                <FormInspect addInspect={addInspect} />
                <div>
                    {sortedInspect.map((inspect, index) => (
                    <Card>
                    <Card.Body>
                        <Inspect
                        key={index}
                        index={index}
                        inspect={inspect}
                        markInspect={markInspect}
                        deleteInspect={deleteInspect}
                        markPriority={markPriority}
                        />
                    </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

            
        </div>
    );

}

