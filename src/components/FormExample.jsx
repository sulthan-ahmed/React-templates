import React from "react";

const FormExample = ({person}) => {
    return (
        <>
          <form action="send" method="POST">
            <input type="text" name="name"></input>
            <button>Continue</button>
          </form>
          
        </>
    )
}

export default FormExample;
