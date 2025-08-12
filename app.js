import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom/client'

/*
const h1 = React.createElement("h1",{
    id : "headingOne",
}, "Heading One");

const h2 = React.createElement("h2",{
    id : "headingTwo",
}, "Heading Two");

const container = React.createElement("div", {
    id : "container"
}, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); */

// React Element
const h1 = React.createElement("h1",{
    id : "headingOne",
}, "Heading One");

// React Element using jsx
const headingJSX = <h1>Hello</h1>;
// React Element using jsx in multiple lines
const headingJSX1 = (
    <div>
        <h1>Hello world</h1>
    </div>
);

// React Component
const Title = () => (
    <h1 id="heading">Namaste react</h1>
);

// React Component with return statement
const Component1 = () => {
    return <h1>return ke sath</h1>
};

// short hand for js arrow function
const fn = () => true; // it will return true

// React Component rendering and Component composition
const Testcomp = () => (
    <div id="container">
        <Title />
        <h2>React Component and it's rendering along side Component composition</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Testcomp />);
