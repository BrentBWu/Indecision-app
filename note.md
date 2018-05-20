## build a live server

cmd: yarn global add live-server
	 npm install -g live-server
   live-server public

## JSX - JavaScript XML

~~~JS
React.render('JSX you would like to render','DOM element what you would like to render');
~~~

~~~JS
// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
~~~

Use babel to understand transfer

## Install babel emv
cmd: yarn global add babel-cli@6.24.1
	 babel --help
	 yarn init or npm init
	 yarn add babel-preset-react

## Use babel to control jsx

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

*Two file will change at the meantime*

~~~JS
// JSX - JavaScript XML
var template = (
<div>
    <h1>This is JSX language</h1>
    <p>info extra</p>
</div>
);
~~~

## conditional javascript methods
~~~js
var user = {
    name: 'Brent',
    age: 18,
    // location: 'Auckland'
};

function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>;
    }
    else return 'Unknown';
}
~~~

## ternary operator
~~~js
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
~~~

## JSX let const vs var
You can check pdf resources
Use const with high priority, use let only when you want to declare sth that you want to resign.

## es6 arrow function
This function might be equal to its parent level
like

~~~js
const user = {
    name: 'Andrew',
    cities: ['Auckland','New York','Dublin'],
    printPlacesLived: function () {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;

        // this.name is not accessable here, unless you use arrow function
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
~~~

Actually we can modify it better

~~~js
const user = {
    name: 'Andrew',
    cities: ['Auckland','New York','Dublin'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;

        // this.name is not accessable here, unless you use arrow function
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
~~~

**We don't need to use 'function' again.**

## Questions: what is e.target.elements.option.value = ''; (app.js line 41)

## Questions: what is app.options.push(option);

## Prop


## How to search for solutions
google: mdn bind