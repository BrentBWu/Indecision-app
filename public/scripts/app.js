'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

// Creat a templateTwo var JSX expression
// div
// h1 -> Andrew Mead
// P -> Age: 26
// P -> Location: Auckland
// Reader templateTwp instead of template

// create app object title/subtitle
// use title/subtitle in the template
// render template

// if statement
// ternary operators
// logical and operator
var user = {
    // name: 'Brent',
    age: 18
    // location: 'Auckland'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    } else return 'Unknown';
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
