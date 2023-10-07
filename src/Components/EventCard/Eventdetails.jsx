import { useParams } from "react-router-dom";


const Eventdetails = () => {
    
    
    const {id} = useParams();
    return (
        <div>
            <h2>Events Details{id}</h2>
            <p>{}</p>
        </div>
    );
};

export default Eventdetails;