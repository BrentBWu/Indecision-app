class Counter extends React.Component {
    // if your function do require access to the state of your component, you need to bind them
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }
    handleAddOne() {
        // this.state.count ++;
        // prevState: state before change
        // setState only change specific value
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        // console.log(this.state);
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        // console.log('handleMinusOne');
    } 

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        // console.log('handleReset');
    }

    
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.oh to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />,document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };




// // Challenge
// // Make button "-1" - setup minusOne function and register - log "minusOne"
// // Make reset button "reset" - setup reset function - log "reset"




// const appRoot = document.getElementById("app");



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot);  
// };

// renderCounterApp();