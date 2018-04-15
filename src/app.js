console.log('App.js is running');

// JSX - JavaScript XML

// Creat a templateTwo var JSX expression
// div
// h1 -> Andrew Mead
// P -> Age: 26
// P -> Location: Auckland
// Reader templateTwp instead of template
var templateTwo = (
    <div>
        <h1>Bowen Wu</h1>
        <p>Age: 25</p>
        <p>Location: Auckland</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo,appRoot);