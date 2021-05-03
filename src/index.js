import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [customState, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{customState}</button>;
}

render(<App />, document.getElementById("root"));