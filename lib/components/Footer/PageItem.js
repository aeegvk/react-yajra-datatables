'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageItem = function PageItem(_ref) {
    var active = _ref.active,
        number = _ref.number,
        setPage = _ref.setPage;

    var getClasses = function getClasses() {
        return ['page', active ? 'active' : ''].join(' ');
    };

    var handleClick = function handleClick() {
        return setPage(number - 1);
    };
    return _react2.default.createElement(
        'div',
        { className: getClasses(), onClick: handleClick },
        number
    );
};

exports.default = PageItem;