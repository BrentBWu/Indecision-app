// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2,4)


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
             options : ['Thing one','Thing two','Thing three']
        };
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick() {
        this.setState(() => {
            let randomNum = Math.floor(Math.random() * this.state.options.length);
            let option = this.state.options[randomNum];
            alert(option);
            
        });
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add them';
        }   else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }   
        this.setState((preState) => {
            // preState.options.push(option);
            return {
                options: preState.options.concat([option]) // what is concat; merge the array value
            };
        });
    }
    // handleDeleteOptions
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an option and alert it
    render() {
        const title = 'Indecision';
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length>0} 
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} // through props rerender in child
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}



class Header extends React.Component{
    render() {
        // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    // handlePick() {
    //     alert('asd');
    // }
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do
                </button>
            </div>
        );
    }
}

// Setup options prop for Options component
// Render the length of the array


// Options -> Options component here

// Render new p tag for each option (set text, set key)

// Add remove all button
// Setup handleRemoveAll => alert some message
// Setup onclick to fire the button
class Options extends React.Component {
    // constructor(props) {
    //     super(props); // run father's constructor
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll() {
    //     // alert("Handle Remove All");
    //     console.log(this.props.options);
    // }
    
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

// Option -< Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value type -> of value, then alert

// AddOption -> AddOption component here
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();// Go into target element
        // use trim to remove the space
        const error = this.props.handleAddOption(option);
        if (option) {
            this.props.handleAddOption(option);
        }
        this.setState(() => {
            return {
                error // equal to error: error
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>submit</button>
                </form>
                <button /*onClick={Add}*/>Add Option</button>
            </div>
        );
    }
}

/* const jsx = (
    <div>
        <Header />
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
); */

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));