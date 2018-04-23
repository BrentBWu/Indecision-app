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
// const user = {
//     // name: 'Brent',
//     age: 18,
//     // location: 'Auckland'
// };

// only render the subtitle {and p tag} if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var numbers = [55, 101, 1000];

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // stop refresh, put data inside client side

    var option = e.target.elements.option.value; // point to the element that the state start

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
    console.log('form submitted');
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

var appRoot = document.getElementById("app");

// create 'Remove All' button above list
// on click -> wipe the array -> rerender

// create render function that renders the new jsx
// call it right away
// call it after options array added to
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options ' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,

            /*  numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                }) */
            app.options.map(function (e) {
                return React.createElement(
                    'li',
                    { key: e },
                    'Item: ',
                    e
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: onRemoveAll },
                'Remove All'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
