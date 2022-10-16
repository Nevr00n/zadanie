import React, { useState } from "react";

function AddNumber(props) {
    const [init, setInit] = useState(0);


    const handleChange = event => {
        setInit(event.target.value);

        console.log('value is:', event.target.value);
    }

    return (
        <div className="text">
            <form>
                <h4>wartosc x: </h4>
                <input type="number" onChange={handleChange}></input>
            </form>
        </div>
    );
}

export default AddNumber;
