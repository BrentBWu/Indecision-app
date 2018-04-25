const app = {
    title: 'Visbility Toggle',
    options: []
};

// let count = 0;
let visbility = true;

const toggle = () => {
    visbility = !visbility;
    render();
};

// const addOe = () => {
//     count++;
//     render();
// };

// const showDetails = () => {
//     count++;
//     if(count%2 !== 0) {
//         app.options = ["complete challenge"];
//     }
//     else {
//         app.options= [];
//     }
//     console.log(count);
//     console.log(app.options);
//     render();
// };

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {/*<button onClick={showDetails}>Show Details</button>*/}
            <button onClick={toggle}>{visbility ? "Show Details" : "Hide Details"}</button>
            <p>{/*app.options*/}</p>
                {!visbility &&(
                    <p>complete challenge</p>    
                )}
        </div>
    );
    
    ReactDOM.render(template,appRoot);
};

render();