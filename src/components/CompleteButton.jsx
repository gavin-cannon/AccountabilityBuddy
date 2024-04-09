import { useState } from 'react';

const CompleteButton = () => {
    const [complete, setComplete] = useState(false);
    const message = "Nice work you did it!";
    
    function handleCompleteClick(){
        setComplete(!complete);
    }

    return (
    <>    
        <button onClick={handleCompleteClick}>
        Complete?
        </button>
        {complete && <p> {message} </p>}
    </>);
}

export default CompleteButton;



