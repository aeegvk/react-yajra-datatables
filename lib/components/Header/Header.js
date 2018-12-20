'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: space-between;\n'], ['\n    display: flex;\n    justify-content: space-between;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _EntriesSelect = require('./EntriesSelect');

var _EntriesSelect2 = _interopRequireDefault(_EntriesSelect);

var _SearchInput = require('./SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Header = function Header(_ref) {
    var entriesToShow = _ref.entriesToShow,
        setEntriesToShow = _ref.setEntriesToShow,
        searchInput = _ref.searchInput,
        setSearchInput = _ref.setSearchInput;
    return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(_EntriesSelect2.default, { entriesToShow: entriesToShow, setEntriesToShow: setEntriesToShow }),
        _react2.default.createElement(_SearchInput2.default, { searchInput: searchInput, setSearchInput: setSearchInput })
    );
};

exports.default = Header;