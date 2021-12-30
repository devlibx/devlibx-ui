"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactBootstrap = require("react-bootstrap");

var _bs = require("react-icons/bs");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function KafkaBroker({
  brokers,
  helpStr,
  leftSideTitle
}) {
  const [broker, setBroker] = (0, _react.useState)(brokers);
  const ref = (0, _react.useRef)(null);

  const checkBrokerValue = event => {// TODO - check if broker value contains correct port GrTooltip
  };

  const popover = /*#__PURE__*/_react.default.createElement(_reactBootstrap.Popover, {
    id: "popover-basic"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Popover.Header, {
    as: "h3"
  }, "Info"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Popover.Body, null, helpStr));

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup.Text, {
    id: "basic-addon1"
  }, leftSideTitle), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
    placeholder: broker,
    "aria-label": broker,
    "aria-describedby": "basic-addon1",
    onBlur: checkBrokerValue,
    onChange: e => setBroker(e.target.value),
    value: broker
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, helpStr)
  }, ({ ...triggerHandler
  }) => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, _extends({
    variant: "light"
  }, triggerHandler, {
    className: "d-inline-flex align-items-center"
  }), /*#__PURE__*/_react.default.createElement(_bs.BsFillInfoCircleFill, null)))));
}

KafkaBroker.defaultProps = {
  brokers: "localhost:9092",
  helpStr: "Plese provide the broker url e.g. localhost:9092",
  leftSideTitle: "Broker"
};
var _default = KafkaBroker;
exports.default = _default;