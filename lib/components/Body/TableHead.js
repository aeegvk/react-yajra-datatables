'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableHeadCell = require('./TableHeadCell');

var _TableHeadCell2 = _interopRequireDefault(_TableHeadCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHead = function TableHead(_ref) {
    var columns = _ref.columns,
        setOrderColumn = _ref.setOrderColumn,
        orderColumnIndex = _ref.orderColumnIndex,
        orderColumnDirection = _ref.orderColumnDirection;

    var renderHeadCells = function renderHeadCells() {
        return columns.map(function (column, index) {
            return _react2.default.createElement(_TableHeadCell2.default, {
                orderColumnIndex: orderColumnIndex,
                orderColumnDirection: orderColumnDirection,
                column: column,
                index: index,
                setOrderColumn: setOrderColumn,
                key: index });
        });
    };
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            renderHeadCells()
        )
    );
};

exports.default = TableHead;