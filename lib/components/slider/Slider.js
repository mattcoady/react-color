'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

var _SliderSwatches = require('./SliderSwatches');

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = require('./SliderPointer');

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = exports.Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Slider);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
      _this.props.onChange(data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          slider: {},
          hue: {
            height: '12px',
            position: 'relative'
          },
          Hue: {
            radius: '2px'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.slider, className: 'slider-picker' },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, _extends({
            style: styles.Hue
          }, this.props, {
            pointer: _SliderPointer2.default,
            onChange: this.handleChange
          }))
        ),
        _react2.default.createElement(
          'div',
          { style: styles.swatches },
          _react2.default.createElement(_SliderSwatches2.default, _extends({}, this.props, { onClick: this.handleChange }))
        )
      );
    }
  }]);

  return Slider;
}(_react2.default.Component);

exports.default = (0, _common.ColorWrap)(Slider);