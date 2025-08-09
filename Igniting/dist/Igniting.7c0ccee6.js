const h1 = React.createElement("h1", {
    id: "headingOne"
}, "Heading One");
const h2 = React.createElement("h2", {
    id: "headingTwo"
}, "Heading Two");
const container = React.createElement("div", {
    id: "container"
}, [
    h1,
    h2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=Igniting.7c0ccee6.js.map
