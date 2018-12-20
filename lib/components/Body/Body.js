'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
    var columns = _ref.columns,
        data = _ref.data,
        setOrderColumn = _ref.setOrderColumn,
        orderColumnDirection = _ref.orderColumnDirection,
        orderColumnIndex = _ref.orderColumnIndex,
        styles = _ref.styles;
    return _react2.default.createElement(
        'div',
        { className: 'datatable-body' },
        _react2.default.createElement(_Table2.default, {
            columns: columns,
            data: data,
            setOrderColumn: setOrderColumn,
            orderColumnDirection: orderColumnDirection,
            orderColumnIndex: orderColumnIndex,
            styles: styles })
    );
};

exports.default = Body;