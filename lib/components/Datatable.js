'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Footer = require('./Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _query = require('../services/query');

var _query2 = _interopRequireDefault(_query);

var _Wrapper = require('./Wrapper.js');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var requestSearch = function requestSearch(value) {
    var regex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return {
        value: value,
        regex: regex
    };
};

var DESC = 'desc';
var ASC = 'asc';
var toggleDirection = function toggleDirection(direction) {
    return direction === ASC ? DESC : ASC;
};
var DEBOUNCE_DELAY = 500;

var Datatable = function (_React$Component) {
    _inherits(Datatable, _React$Component);

    function Datatable(props) {
        _classCallCheck(this, Datatable);

        var _this = _possibleConstructorReturn(this, (Datatable.__proto__ || Object.getPrototypeOf(Datatable)).call(this, props));

        _this.state = {
            entriesToShow: 10,
            searchInput: '',
            currentPage: 0,
            orderColumnIndex: 0,
            orderColumnDirection: DESC,
            refreshing: false,

            recordsTotal: 0,
            recordsFiltered: 0,
            drawCount: 1,
            data: []
        };

        _this.updateTableState = _this.updateTableState.bind(_this);
        _this.handleSetEntriesToShow = _this.handleSetEntriesToShow.bind(_this);
        _this.handleSetSearchInput = _this.handleSetSearchInput.bind(_this);
        _this.handleSetPage = _this.handleSetPage.bind(_this);
        _this.handleSetOrderColumn = _this.handleSetOrderColumn.bind(_this);
        _this.debouncedDraw = (0, _lodash.debounce)(_this.debouncedDraw.bind(_this), _this.props.debounceDelay || DEBOUNCE_DELAY);
        return _this;
    }

    _createClass(Datatable, [{
        key: 'getStartIndex',
        value: function getStartIndex() {
            return this.state.currentPage * this.state.entriesToShow;
        }
    }, {
        key: 'updateTableState',
        value: function updateTableState(response) {
            var _getResponseData = this.getResponseData(response.data),
                recordsTotal = _getResponseData.recordsTotal,
                recordsFiltered = _getResponseData.recordsFiltered,
                data = _getResponseData.data,
                draw = _getResponseData.draw;

            this.setState({
                recordsTotal: recordsTotal,
                recordsFiltered: recordsFiltered,
                data: data,
                drawCount: draw + 1,
                refreshing: false
            });
        }
    }, {
        key: 'getResponseData',
        value: function getResponseData(data) {
            return this.props.responseDataGetter ? this.props.responseDataGetter(data) : data;
        }
    }, {
        key: 'handleSetEntriesToShow',
        value: function handleSetEntriesToShow(entriesToShow) {
            var _this2 = this;

            this.setState({
                entriesToShow: entriesToShow
            }, function () {
                return _this2.draw();
            });
        }
    }, {
        key: 'handleSetSearchInput',
        value: function handleSetSearchInput(searchInput) {
            var _this3 = this;

            this.setState({
                searchInput: searchInput
            }, function () {
                return _this3.debouncedDraw();
            });
        }
    }, {
        key: 'debouncedDraw',
        value: function debouncedDraw() {
            this.draw();
        }
    }, {
        key: 'handleSetPage',
        value: function handleSetPage(page) {
            var _this4 = this;

            if (this.state.currentPage != page) {
                this.setState({
                    currentPage: page
                }, function () {
                    return _this4.draw();
                });
            }
        }
    }, {
        key: 'handleSetOrderColumn',
        value: function handleSetOrderColumn(columnIndex) {
            var _this5 = this;

            var columnDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (columnIndex === this.state.orderColumnIndex) {
                columnDirection = columnDirection || toggleDirection(this.state.orderColumnDirection);
            } else {
                columnDirection = columnDirection || DESC;
            }
            this.setState({
                orderColumnIndex: columnIndex,
                orderColumnDirection: columnDirection
            }, function () {
                return _this5.draw();
            });
        }
    }, {
        key: 'getBodyData',
        value: function getBodyData() {
            return this.state.data.slice(this.getStartIndex(), this.state.entriesToShow);
        }
    }, {
        key: 'getColumns',
        value: function getColumns() {
            return this.props.columns.slice(0).map(function (column) {
                return Object.assign({
                    searchable: true,
                    orderable: true,
                    search: requestSearch('')
                }, column);
            });
        }
    }, {
        key: 'getOrderForRequest',
        value: function getOrderForRequest() {
            return [{
                column: this.state.orderColumnIndex,
                dir: this.state.orderColumnDirection
            }];
        }
    }, {
        key: 'getRequestData',
        value: function getRequestData() {
            return {
                columns: this.getColumns(),
                start: this.getStartIndex(),
                length: this.state.entriesToShow,
                search: requestSearch(this.state.searchInput),
                order: this.getOrderForRequest(),
                draw: this.state.drawCount
            };
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            (0, _query2.default)({
                url: this.props.url,
                method: this.props.method || 'get',
                data: this.getRequestData()
            }).then(this.updateTableState);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            var _this6 = this;

            this.setState({
                refreshing: true
            }, function () {
                return _this6.refresh();
            });
        }
    }, {
        key: 'getStyleProps',
        value: function getStyleProps() {
            return {
                bordered: this.props.bordered || true,
                condensed: this.props.condensed || true,
                alternated: this.props.alternated || true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Wrapper2.default,
                this.getStyleProps(),
                _react2.default.createElement(_Header2.default, {
                    entriesToShow: this.state.entriesToShow,
                    searchInput: this.state.searchInput,
                    setEntriesToShow: this.handleSetEntriesToShow,
                    setSearchInput: this.handleSetSearchInput }),
                _react2.default.createElement(_Body2.default, {
                    columns: this.getColumns(),
                    data: this.state.data,
                    orderColumnDirection: this.state.orderColumnDirection,
                    orderColumnIndex: this.state.orderColumnIndex,
                    setOrderColumn: this.handleSetOrderColumn,
                    styles: this.getStyleProps() }),
                _react2.default.createElement(_Footer2.default, {
                    currentPage: this.state.currentPage,
                    setPage: this.handleSetPage,
                    entriesToShow: this.state.entriesToShow,
                    recordsFiltered: this.state.recordsFiltered,
                    recordsTotal: this.state.recordsTotal,
                    dataLength: this.state.data.length,
                    refreshing: this.state.refreshing })
            );
        }
    }]);

    return Datatable;
}(_react2.default.Component);

exports.default = Datatable;