
import { useParams } from "react-router-dom";


export default function Articles() {

    let {id} = useParams();

    return (
        <div>
            <h1> Article {id} </h1>
        </div>
    );

}