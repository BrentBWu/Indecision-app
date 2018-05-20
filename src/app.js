class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = "Put your life in the hands of a computer";
        const options = ['Thing one','Thing two','Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
    handlePick() {
        alert("asdasd");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do ?</button>
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
    constructor(props) {
        super(props); // run father's constructor
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        // alert("Handle Remove All");
        console.log(this.props.options);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>RemoveAll</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();// Go into target element
        // use trim to remove the space
        if (option) {
          alert("find value");
        }
    }
    render() {
        return (
            <div>
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