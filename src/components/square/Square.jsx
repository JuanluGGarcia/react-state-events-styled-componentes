import { useState } from "react";
import { StyledSquare } from "./style";

const Square = () => {
    const [isRed, setIsRed] = useState('true');

    return (
        <>
        
            <StyledSquare isRed={isRed} />
            <button onClick={() => setIsRed(!isRed)}>Cambia color</button>
                
        </>
    );
};

export default Square;