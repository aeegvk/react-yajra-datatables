'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChangePageButton = function ChangePageButton(_ref) {
    var increment = _ref.increment,
        currentPage = _ref.currentPage,
        pageCount = _ref.pageCount,
        setPage = _ref.setPage;

    var isClickable = function isClickable() {
        var newPage = currentPage + increment;
        return newPage >= 0 && newPage < pageCount;
    };
    var handleClick = function handleClick() {
        var newPage = currentPage + increment;
        if (isClickable()) {
            setPage(newPage);
        }
    };
    var getClasses = function getClasses() {
        return ['page', !isClickable() ? 'disabled' : ''].join(' ');
    };
    var renderContent = function renderContent() {
        return increment > 0 ? '>' : '<';
    };
    return _react2.default.createElement(
        'div',
        { className: getClasses(), onClick: handleClick },
        renderContent()
    );
};

exports.default = ChangePageButton;