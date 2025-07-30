import React from "react";
import CodeContext from "./codeContext";

const CodeState= (props)=>{

    return(
        <CodeContext.Provider value={{}}>
           {props.children}
        </CodeContext.Provider>
    )
}

export default CodeState