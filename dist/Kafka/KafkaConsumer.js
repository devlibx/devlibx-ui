"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function KafkaConsumer(props) {
  const [item] = (0, _react.useState)(props.kafk_consumer);
  console.log("Item to configure kafka consumer = ", item);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Kafka Topic"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "Some Topic",
    value: item.topic
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Broker"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "localhsot:9092",
    value: item.brokers
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Partitions"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "10",
    value: item.partitions
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Replication Factor"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "10",
    value: item.replication_factor
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Group Id"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "10",
    value: item["group.id"]
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Message Timeout"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "10",
    value: item["publish.message.timeout.ms"]
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    as: _reactBootstrap.Row,
    className: "mb-3",
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
    column: true,
    sm: "2"
  }, "Acks"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: "10"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "10",
    value: item["acks"]
  }))));
}

var _default = KafkaConsumer;
exports.default = _default;