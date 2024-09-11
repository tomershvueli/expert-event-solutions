import React from "react";
import { } from "react-router-dom";
import { Button } from "../Button/Button";

const App: React.FC = () => {
    return (
        <Button submit={() => console.log('Button clicked!')}/>
    )
}
export default App;