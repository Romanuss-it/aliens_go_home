"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathFromBezierCurve = void 0;

var pathFromBezierCurve = function pathFromBezierCurve(cubicBezierCurve) {
  var initialAxis = cubicBezierCurve.initialAxis,
      initialControlPoint = cubicBezierCurve.initialControlPoint,
      endingControlPoint = cubicBezierCurve.endingControlPoint,
      endingAxis = cubicBezierCurve.endingAxis;
  return "\n    M".concat(initialAxis.x, " ").concat(initialAxis.y, "\n    c ").concat(initialControlPoint.x, " ").concat(initialControlPoint.y, "\n    ").concat(endingControlPoint.x, " ").concat(endingControlPoint.y, "\n    ").concat(endingAxis.x, " ").concat(endingAxis.y, "\n  ");
};

exports.pathFromBezierCurve = pathFromBezierCurve;