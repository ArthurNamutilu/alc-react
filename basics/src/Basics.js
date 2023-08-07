import { useState } from "react";
function Basics() {
    const [count, setCount] = useState(5);
    return ( 
        <div>
            <p>Value is {count}</p>
            <button onClick={ 
                ()=> setCount(count * 2)}>{count}
            </button>
        </div>
     );
}

export default Basics;