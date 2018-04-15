"use strict";

console.log('App.js is running');

// JSX - JavaScript XML

// Creat a templateTwo var JSX expression
// div
// h1 -> Andrew Mead
// P -> Age: 26
// P -> Location: Auckland
// Reader templateTwp instead of template
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Bowen Wu"
    ),
    React.createElement(
        "p",
        null,
        "Age: 25"
    ),
    React.createElement(
        "p",
        null,
        "Location: Auckland"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
