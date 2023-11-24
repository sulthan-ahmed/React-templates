import React from "react";
import FormExample from "./FormExample";

const App = ({person}) => {
    return (
        <>
            <h1>Hello {person.name} you are {person.age} years old</h1>
            <p>This is a test to see if react works as static html page</p>
            <FormExample />
        </>
    )
}

export default App;
