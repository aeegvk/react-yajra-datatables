'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageItem = require('./PageItem');

var _PageItem2 = _interopRequireDefault(_PageItem);

var _ChangePageButton = require('./ChangePageButton');

var _ChangePageButton2 = _interopRequireDefault(_ChangePageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PAGE_COLLAPSE_THRESHOLD = 8;
var PAGE_COLLAPSE_TO_SHOW = 6;

var Pagination = function Pagination(_ref) {
    var currentPage = _ref.currentPage,
        pageCount = _ref.pageCount,
        setPage = _ref.setPage;

    var renderPages = function renderPages() {
        var pages = [];
        var itemsToShow = pageCount > PAGE_COLLAPSE_THRESHOLD ? PAGE_COLLAPSE_TO_SHOW : pageCount;
        for (var i = 0; i < itemsToShow; i++) {
            pages.push(_react2.default.createElement(_PageItem2.default, { number: i + 1, active: currentPage === i, key: i, setPage: setPage }));
        }
        if (itemsToShow < pageCount) {
            pages.push(_react2.default.createElement(
                'div',
                { className: 'dot-page', key: pageCount - 1 },
                '...'
            ));
            pages.push(_react2.default.createElement(_PageItem2.default, { number: pageCount, active: currentPage === pageCount, key: pageCount, setPage: setPage }));
        }
        return pages;
    };
    return _react2.default.createElement(
        'div',
        { className: 'page-row' },
        _react2.default.createElement(_ChangePageButton2.default, {
            currentPage: currentPage,
            pageCount: pageCount,
            setPage: setPage,
            increment: -1 }),
        renderPages(),
        _react2.default.createElement(_ChangePageButton2.default, {
            currentPage: currentPage,
            pageCount: pageCount,
            setPage: setPage,
            increment: 1 })
    );
};

exports.default = Pagination;