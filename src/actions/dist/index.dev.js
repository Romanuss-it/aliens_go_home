"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveObjects = exports.MOVE_OBJECTS = void 0;
var MOVE_OBJECTS = "MOVE_OBJECTS";
exports.MOVE_OBJECTS = MOVE_OBJECTS;

var moveObjects = function moveObjects(mousePosition) {
  return {
    type: MOVE_OBJECTS,
    mousePosition: mousePosition
  };
};

exports.moveObjects = moveObjects;