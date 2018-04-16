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
    name: 'Brent',
    age: 18,
    location: 'Auckland'
};

function getLocation(location) {
    if (location) {
        return location;
    }
    else return 'Unknown';
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo,appRoot);