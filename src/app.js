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

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// const numbers = [55, 101, 1000];

const onFormSubmit = (e) => {
    e.preventDefault(); // stop refresh, put data inside client side

    const option = e.target.elements.option.value;// point to the element that the state start
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
    // console.log('form submitted');
};



function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>;
    }
    else return 'Unknown';
}

const appRoot = document.getElementById("app");

// create 'Remove All' button above list
// on click -> wipe the array -> rerender

// create render function that renders the new jsx
// call it right away
// call it after options array added to
const onRemoveAll = () => {
    app.options=[];
    render();
};

const onMakeDecision = () => {
    const randomNum =Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options ' : 'No options' }</p>
            <p>{/*app.options.length*/}</p>
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
            /*  numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                }) */
                app.options.map((e) => {
                    return <li key={e}>{e}</li>;
                })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={onRemoveAll}>Remove All</button>
            </form>
        </div>
    ); 

    ReactDOM.render(template,appRoot);  
};

render();