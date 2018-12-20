'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHead = function TableHead(_ref) {
    var column = _ref.column,
        index = _ref.index,
        orderColumnIndex = _ref.orderColumnIndex,
        orderColumnDirection = _ref.orderColumnDirection,
        setOrderColumn = _ref.setOrderColumn;

    var getHeadClasses = function getHeadClasses() {
        return [column.orderable ? 'orderable' : '', index === orderColumnIndex ? 'ordered-' + orderColumnDirection.toLowerCase() : ''].join(' ');
    };

    var handleClick = function handleClick() {
        return setOrderColumn(index);
    };

    return _react2.default.createElement(
        'th',
        { className: getHeadClasses(), key: index, onClick: handleClick },
        column.name
    );
};

exports.default = TableHead;