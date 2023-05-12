import '../form.css'
import { useState, useEffect } from "react";
import FormInspect from "../Components/FormInspect";
import Inspect from "../Components/Inspect";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocalStorage } from 'react-use';
import { v4 as uuidv4 } from 'uuid';


export default function Inspections() {


    const [inspect, setInspect] = useState([]);

    const [storedInspect, setStoredInspect] = useLocalStorage("storedInspect", "");


    const addInspect = text => {
        const newInspect = [...inspect, {id: uuidv4(), text, isDone: false, highPriority: false, isEdit: false }];
        setInspect(newInspect);
    }

    const markInspect = id => {
        const newInspect = [...inspect];
        const index = newInspect.findIndex(item => item.id === id); 
        if (index === -1) return;
        newInspect[index].isDone = true;
        setInspect(newInspect);

    }

    const deleteInspect = id => {
        const newInspect = [...inspect];
        const index = newInspect.findIndex(item => item.id === id);
        if (index === -1) return;
        newInspect.splice(index,1);
        setInspect(newInspect);
    }

    const markEdit = (id, editInspect) => {
        const newInspect = [...inspect];
        const index = newInspect.findIndex(item => item.id === id);
        if (index === -1) return;
        newInspect[index].text = editInspect;
        setInspect(newInspect);
      }

    const markPriority = id => {
        const highInspect = [...inspect];
        const index = highInspect.findIndex(item => item.id === id);
        if (index === -1) return;
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

    // Load inspect object from localStorage on initial render
    useEffect(() => {
        setInspect(storedInspect);
    }, []);

    // Save inspect object to localStorage whenever inspect change
    useEffect(() => {
        if (inspect) {
            setStoredInspect(inspect)
        }
    }, [inspect]);



    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center mb-4"> Here are your list of inspections </h1>
                <FormInspect addInspect={addInspect} />
                <div>
                    {sortedInspect.map((inspect, index) => (
                    <Card >
                    <Card.Body>
                        <Inspect
                        key={inspect.id}
                        index={index}
                        inspect={inspect}
                        markInspect={markInspect}
                        deleteInspect={deleteInspect}
                        markEdit={markEdit}
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

