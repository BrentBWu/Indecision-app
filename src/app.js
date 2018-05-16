class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
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

// Options -> Options component here
class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <li>this is option</li>
                    <li>this is option</li>
                    <li>this is option</li>
                </ol>
            </div>
        );
    }
}

// const Add = () => {

// };

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

const jsx = (
    <div>
        <Header />
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx,document.getElementById('app'));