// VisibilityToggle - render, constructor, handleToggleVisibility
// Visibility -> false
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState)=> { // If you forget to bind, you cannot access to your state
            return {
                // Visibility: !preState.Visibility
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return ( // Question: why we use '(' here instead of '{'
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "HideDetails":"ShowDetails"}</button>
                <p>{this.state.visibility && "Important info"}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visbility Toggle',
//     options: []
// };

// // let count = 0;
// let visbility = true;

// const toggle = () => {
//     visbility = !visbility;
//     render();
// };

// // const addOe = () => {
// //     count++;
// //     render();
// // };

// // const showDetails = () => {
// //     count++;
// //     if(count%2 !== 0) {
// //         app.options = ["complete challenge"];
// //     }
// //     else {
// //         app.options= [];
// //     }
// //     console.log(count);
// //     console.log(app.options);
// //     render();
// // };

// const appRoot = document.getElementById("app");

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {/*<button onClick={showDetails}>Show Details</button>*/}
//             <button onClick={toggle}>{visbility ? "Show Details" : "Hide Details"}</button>
//             <p>{/*app.options*/}</p>
//                 {!visbility &&(
//                     <p>complete challenge</p>    
//                 )}
//         </div>
//     );
    
//     ReactDOM.render(template,appRoot);
// };

// render();