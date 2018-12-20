"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchInput = function SearchInput(_ref) {
    var searchInput = _ref.searchInput,
        setSearchInput = _ref.setSearchInput;

    var handleChange = function handleChange(event) {
        return setSearchInput(event.target.value);
    };

    return _react2.default.createElement(
        "div",
        { className: "search" },
        _react2.default.createElement(
            "label",
            null,
            "Search"
        ),
        _react2.default.createElement("input", { type: "text", className: "form-control input-sm", value: searchInput, onChange: handleChange })
    );
};

exports.default = SearchInput;