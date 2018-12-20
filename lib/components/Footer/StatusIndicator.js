"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingIndicator = function LoadingIndicator(_ref) {
    var start = _ref.start,
        dataLength = _ref.dataLength,
        recordsTotal = _ref.recordsTotal;
    return _react2.default.createElement(
        "div",
        { className: "status" },
        "Showing " + start + " to " + (start + dataLength - 1) + " of " + recordsTotal
    );
};

exports.default = LoadingIndicator;