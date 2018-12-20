'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingIndicator = function LoadingIndicator(_ref) {
    var loading = _ref.loading;

    var getClasses = function getClasses() {
        return ['fa', loading ? 'fa-spinner faa-spin animated' : 'fa-check'].join(' ');
    };
    var renderText = function renderText() {
        return loading ? 'Updating table' : 'Table updated';
    };
    return _react2.default.createElement(
        'div',
        { className: 'loading' },
        _react2.default.createElement('i', { className: getClasses() }),
        ' ',
        renderText()
    );
};

exports.default = LoadingIndicator;