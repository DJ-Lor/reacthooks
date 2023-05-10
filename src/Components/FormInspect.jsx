
import { useState } from "react";


export default function FormInspect({addInspect}) {

    const [value, setValue] = useState();

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
            <form>
                <label>New Inspection To do</label>
                <input className="input" type="text" value={value} onChange={ e => setValue(e.target.value)}  placeholder="Add new inspection"/>
                <button variant="primary mb-3" type="Submit" onClick={handleSubmit}> Submit </button>

            </form>

        </div>
    )




}