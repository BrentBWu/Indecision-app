"use strict";

var app = {
    title: 'Visbility Toggle',
    options: []
};

// let count = 0;
var visbility = true;

var toggle = function toggle() {
    visbility = !visbility;
    render();
};

// const addOe = () => {
//     count++;
//     render();
// };

// const showDetails = () => {
//     count++;
//     if(count%2 !== 0) {
//         app.options = ["complete challenge"];
//     }
//     else {
//         app.options= [];
//     }
//     console.log(count);
//     console.log(app.options);
//     render();
// };

var appRoot = document.getElementById("app");

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            visbility ? "Show Details" : "Hide Details"
        ),
        React.createElement("p", null),
        React.createElement(
            "p",
            null,
            !visbility && "complete challenge"
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
