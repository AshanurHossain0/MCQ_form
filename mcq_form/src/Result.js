
import { useLocation } from "react-router-dom"


export default function Result(){
    const location=useLocation();
    return(
        <div>
            <h1>Your Score is {location.state * 4} out of 20</h1>
        </div>
    )
}