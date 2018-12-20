'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query(_ref) {
    var url = _ref.url,
        _ref$method = _ref.method,
        method = _ref$method === undefined ? 'get' : _ref$method,
        data = _ref.data;

    return _axios2.default.request({
        url: url,
        method: method.toUpperCase(),
        data: data,
        params: data,
        paramsSerializer: function paramsSerializer(params) {
            return _qs2.default.stringify(params, { arrayFormat: 'indices' });
        }
    });
};

exports.default = query;