
import { useState } from "react";
import { Button, Form } from 'react-bootstrap';

export default function FormInspect({addInspect}) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) {
            return
        } else {
            addInspect(value);
            setValue("");
        }
    };

    return (
        <div>
            <Form>
            <Form.Group>
                <label>New Inspection To do</label>
                <Form.Control className="input" type="text" value={value} onChange={ e => setValue(e.target.value)}  placeholder="Add new inspection"/>
            </Form.Group>    
                <Button variant="primary mb-3" type="Submit" onClick={handleSubmit}> Submit </Button>

            </Form>

        </div>
    )
}
