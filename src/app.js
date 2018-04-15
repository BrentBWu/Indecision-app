console.log('App.js is running');

// JSX - JavaScript XML
var template = (
<div>
    <h1>This is JSX language</h1>
    <p>info extra</p>
    <ol>
        <li>Bowen Wu</li>
        <li>Item two</li>
        <li>Item three</li>
    </ol>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);