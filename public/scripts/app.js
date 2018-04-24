"use strict";

var app = {
    title: 'Visbility Toggle',
    options: []
};

var count = 0;

// const addOe = () => {
//     count++;
//     render();
// };

var showDetails = function showDetails() {
    count++;
    if (count % 2 !== 0) {
        app.options = ["complete challenge"];
    } else {
        app.options = [];
    }
    console.log(count);
    console.log(app.options);
    render();
};

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
            { onClick: showDetails },
            "Show Details"
        ),
        React.createElement(
            "p",
            null,
            app.options
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
