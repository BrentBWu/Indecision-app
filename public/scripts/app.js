"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// VisibilityToggle - render, constructor, handleToggleVisibility
// Visibility -> false
var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: "handleToggleVisibility",
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                // If you forget to bind, you cannot access to your state
                return {
                    // Visibility: !preState.Visibility
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return (// Question: why we use '(' here instead of '{'
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h1",
                        null,
                        "Visibility Toggle"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.handleToggleVisibility },
                        this.state.visibility ? "HideDetails" : "ShowDetails"
                    ),
                    React.createElement(
                        "p",
                        null,
                        this.state.visibility && "Important info"
                    )
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

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
