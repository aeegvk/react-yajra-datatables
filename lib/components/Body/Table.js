'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    table-layout: auto;\n    border-collapse: collapse;\n'], ['\n    width: 100%;\n    table-layout: auto;\n    border-collapse: collapse;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TableHead = require('./TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.table(_templateObject);

var Table = function Table(_ref) {
    var columns = _ref.columns,
        setOrderColumn = _ref.setOrderColumn,
        data = _ref.data,
        orderColumnDirection = _ref.orderColumnDirection,
        orderColumnIndex = _ref.orderColumnIndex,
        styles = _ref.styles;
    return _react2.default.createElement(
        Wrapper,
        styles,
        _react2.default.createElement(_TableHead2.default, {
            columns: columns,
            setOrderColumn: setOrderColumn,
            orderColumnDirection: orderColumnDirection,
            orderColumnIndex: orderColumnIndex }),
        _react2.default.createElement(_TableBody2.default, { columns: columns, data: data, styles: styles })
    );
};

exports.default = Table;