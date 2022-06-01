"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("../App"));

var _index = require("../actions/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    angle: state.angle
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    moveObjects: function moveObjects(mousePosition) {
      dispatch((0, _index.moveObjects)(mousePosition));
    }
  };
};

var Game = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App["default"]);
var _default = Game;
exports["default"] = _default;