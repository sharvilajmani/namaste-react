import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="title">
        Namaste React
    </h1>
);

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <h2 className="heading">Namaste React Functional Component</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);