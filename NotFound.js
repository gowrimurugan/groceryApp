import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(){
    const navigateTo = useNavigate()

    return (
        <div style={{textAlign:"center"}}>
            <button onClick={() =>{
                navigateTo(-1)
            }}>Go Back</button>
            <h1>404 Not Found...!</h1>
        </div>
    )
}

export default NotFound;