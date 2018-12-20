'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    td {\n        padding: 5px;\n        border-width: ', 'px;\n        border-style: solid;\n        border-left-color: transparent;\n        border-right-color: transparent;\n        border-top-color: ', ';\n        border-bottom-color: ', ';\n    }\n'], ['\n    td {\n        padding: 5px;\n        border-width: ', 'px;\n        border-style: solid;\n        border-left-color: transparent;\n        border-right-color: transparent;\n        border-top-color: ', ';\n        border-bottom-color: ', ';\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../services/constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.tbody(_templateObject, function (props) {
    return props.bordered ? constants.sizes.BORDER_SIZE : 0;
}, constants.colors.BORDER_COLOR, constants.colors.BORDER_COLOR);

var TableBody = function TableBody(_ref) {
    var columns = _ref.columns,
        data = _ref.data,
        styles = _ref.styles;

    var renderCell = function renderCell(index, value) {
        return _react2.default.createElement(
            'td',
            { key: index },
            value
        );
    };

    var renderHtmlCell = function renderHtmlCell(index, value) {
        return _react2.default.createElement('td', { key: index, dangerouslySetInnerHTML: { __html: value } });
    };

    var renderCells = function renderCells(row) {
        return columns.map(function (column, index) {
            return column.html ? renderHtmlCell(index, row[column.data]) : renderCell(index, row[column.data]);
        });
    };

    var renderRows = function renderRows() {
        return data.map(function (row, index) {
            return _react2.default.createElement(
                'tr',
                { key: index },
                renderCells(row)
            );
        });
    };

    return _react2.default.createElement(
        Wrapper,
        styles,
        renderRows()
    );
};

exports.default = TableBody;