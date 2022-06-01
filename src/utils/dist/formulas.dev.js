"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCanvasPosition = exports.calculateAngle = exports.radiansToDegrees = exports.pathFromBezierCurve = void 0;

var pathFromBezierCurve = function pathFromBezierCurve(cubicBezierCurve) {
  var initialAxis = cubicBezierCurve.initialAxis,
      initialControlPoint = cubicBezierCurve.initialControlPoint,
      endingControlPoint = cubicBezierCurve.endingControlPoint,
      endingAxis = cubicBezierCurve.endingAxis;
  return "\n    M".concat(initialAxis.x, " ").concat(initialAxis.y, "\n    c ").concat(initialControlPoint.x, " ").concat(initialControlPoint.y, "\n    ").concat(endingControlPoint.x, " ").concat(endingControlPoint.y, "\n    ").concat(endingAxis.x, " ").concat(endingAxis.y, "\n  ");
};

exports.pathFromBezierCurve = pathFromBezierCurve;

var radiansToDegrees = function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
};

exports.radiansToDegrees = radiansToDegrees;

var calculateAngle = function calculateAngle(x1, y1, x2, y2) {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } else if (x2 < 0 && y2 >= 0) {
    return -90;
  }

  var dividend = x2 - x1;
  var divisor = y2 - y1;
  var quotient = dividend / divisor;
  return radiansToDegrees(Math.atan(quotient)) * -1;
};

exports.calculateAngle = calculateAngle;

var getCanvasPosition = function getCanvasPosition(event) {
  // mouse position on auto-scaling canvas
  var svg = document.getElementById("aliens-go-home-canvas");
  var point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;

  var _point$matrixTransfor = point.matrixTransform(svg.getScreenCTM().inverse()),
      x = _point$matrixTransfor.x,
      y = _point$matrixTransfor.y;

  return {
    x: x,
    y: y
  };
};

exports.getCanvasPosition = getCanvasPosition;