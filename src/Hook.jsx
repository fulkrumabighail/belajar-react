import { useState } from "react";

const Hook = () => {
    let [text, setHook] = useState('Not Hooked');
    const clickHook = () =>{
        setHook('Hooked');
    }
    return ( 
        <div className="hook">
            <h1>This is hook</h1>
            <p>{text}</p>
            <button onClick={clickHook}>Click Hook</button>
        </div>
     );
}
 
export default Hook;