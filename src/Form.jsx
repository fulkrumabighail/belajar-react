import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('Mama');

    const clickMe = (e) => {
        setName('Papa');
        console.log('Change', e);
    }
    const clickYou = (name) => {
        setName('You');
        console.log('Papa' + name);
    }
    return (

        <div>
            <form action="">
                <p>{name}</p>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" />
                <br />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" />
                <br />
                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" />
                <br />
            </form>
            <button onClick={clickMe}>Click Me</button>
            <button onClick={() => clickYou('You')}>Click You</button>
        </div>

    );
}

export default Form;