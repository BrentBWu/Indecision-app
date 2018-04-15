'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX language'
    ),
    React.createElement(
        'p',
        null,
        'info extra'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Bowen Wu'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
