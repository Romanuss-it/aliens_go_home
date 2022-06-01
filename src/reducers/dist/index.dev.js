"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _moveObjects = _interopRequireDefault(require("./moveObjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  angle: 45
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.MOVE_OBJECTS:
      return (0, _moveObjects["default"])(state, action);

    default:
      return state;
  }
}

var _default = reducer;
exports["default"] = _default;