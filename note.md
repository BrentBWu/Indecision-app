## build a live server

cmd: yarn global add live-server
	 npm install -g live-server

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