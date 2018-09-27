'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2,4)


var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var _this2 = this;

            this.setState(function () {
                var randomNum = Math.floor(Math.random() * _this2.state.options.length);
                var option = _this2.state.options[randomNum];
                alert(option);
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add them';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }
            this.setState(function (preState) {
                // preState.options.push(option);
                return {
                    options: preState.options.concat([option]) // what is concat; merge the array value
                };
            });
        }
        // handleDeleteOptions
        // handlePick - pass down to Action and setup onClick - bind here
        // randomly pick an option and alert it

    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = "Put your life in the hands of a computer";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions // through props rerender in child
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            // console.log(this.props);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',

        // handlePick() {
        //     alert('asd');
        // }
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    'What should I do'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// Setup options prop for Options component
// Render the length of the array


// Options -> Options component here

// Render new p tag for each option (set text, set key)

// Add remove all button
// Setup handleRemoveAll => alert some message
// Setup onclick to fire the button


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',

        // constructor(props) {
        //     super(props); // run father's constructor
        //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
        // }
        // handleRemoveAll() {
        //     // alert("Handle Remove All");
        //     console.log(this.props.options);
        // }

        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

// Option -< Option component here


var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value type -> of value, then alert

// AddOption -> AddOption component here


var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this7.handleAddOption = _this7.handleAddOption.bind(_this7);
        _this7.state = {
            error: undefined
        };
        return _this7;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim(); // Go into target element
            // use trim to remove the space
            var error = this.props.handleAddOption(option);
            if (option) {
                this.props.handleAddOption(option);
            }
            this.setState(function () {
                return {
                    error: error // equal to error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'submit'
                    )
                ),
                React.createElement(
                    'button',
                    null,
                    'Add Option'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

/* const jsx = (
    <div>
        <Header />
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
); */

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
