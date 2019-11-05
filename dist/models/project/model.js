"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schema = _interopRequireDefault(require("./schema.js"));

var _default = _mongoose["default"].model("Project", _schema["default"]);

exports["default"] = _default;