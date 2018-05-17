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
    render() {
        return (
            <div>
                <button>What should I do ?</button>
            </div>
        );
    }
}

// Setup options prop for Options component
// Render the length of the array


// Options -> Options component here

// Render new p tag for each option (set text, set key)
class Options extends React.Component {
    render() {
        return (
/*             <div>
                <p>{this.props.options[0]}</p>
                <p>{this.props.options[1]}</p>
                <p>{this.props.options[2]}</p>
            </div> */
            <div>
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

// AddOption -> AddOption component here
class AddOption extends React.Component {
    render() {
        return (
            <div>
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