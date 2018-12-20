"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AVAILABLE_ENTRIES = [10, 25, 50, 100];

var EntriesSelect = function EntriesSelect(_ref) {
    var entriesToShow = _ref.entriesToShow,
        setEntriesToShow = _ref.setEntriesToShow;

    var handleChange = function handleChange(event) {
        return setEntriesToShow(event.target.value);
    };
    var renderEntriesSelect = function renderEntriesSelect() {
        return AVAILABLE_ENTRIES.map(function (entry, index) {
            return _react2.default.createElement(
                "option",
                { value: entry, key: index },
                entry
            );
        });
    };
    return _react2.default.createElement(
        "div",
        { className: "entries" },
        _react2.default.createElement(
            "label",
            null,
            "Entries to show"
        ),
        _react2.default.createElement(
            "select",
            { className: "form-control input-sm", value: entriesToShow, onChange: handleChange },
            renderEntriesSelect()
        )
    );
};

exports.default = EntriesSelect;