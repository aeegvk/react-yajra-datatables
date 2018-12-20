'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _LoadingIndicator = require('./LoadingIndicator');

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _StatusIndicator = require('./StatusIndicator');

var _StatusIndicator2 = _interopRequireDefault(_StatusIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
    var currentPage = _ref.currentPage,
        entriesToShow = _ref.entriesToShow,
        refreshing = _ref.refreshing,
        recordsFiltered = _ref.recordsFiltered,
        recordsTotal = _ref.recordsTotal,
        dataLength = _ref.dataLength,
        setPage = _ref.setPage;

    var countPages = function countPages() {
        return Math.ceil(recordsFiltered / entriesToShow);
    };
    var getStart = function getStart() {
        return currentPage * entriesToShow + 1;
    };
    return _react2.default.createElement(
        'div',
        { className: 'datatable-footer' },
        _react2.default.createElement(_StatusIndicator2.default, {
            start: getStart(),
            dataLength: dataLength,
            recordsFiltered: recordsFiltered,
            recordsTotal: recordsTotal }),
        _react2.default.createElement(_LoadingIndicator2.default, { loading: refreshing }),
        _react2.default.createElement(_Pagination2.default, { currentPage: currentPage, pageCount: countPages(), setPage: setPage })
    );
};

exports.default = Footer;