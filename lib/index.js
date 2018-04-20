(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'feather-icons'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('feather-icons'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.featherIcons);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _featherIcons) {
  'use strict';

  exports.__esModule = true;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _featherIcons2 = _interopRequireDefault(_featherIcons);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function createSvg(html) {
    return { __html: html };
  }

  var styles = {
    display: "inline-block",
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: 0,
    speak: "none",
    textAlign: "center",
    textDecoration: "inherit",
    textRendering: "auto",
    textTransform: "none",
    verticalAlign: "baseline"
  };

  var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
      _classCallCheck(this, Icon);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Icon.prototype.render = function render() {
      var _props = this.props,
          type = _props.type,
          color = _props.color,
          size = _props.size,
          otherProps = _objectWithoutProperties(_props, ['type', 'color', 'size']);

      var width = size,
          height = size;
      //TODO：type must be one of feather support icons
      if (!type) {
        return "";
      }
      return _react2.default.createElement('i', _extends({ className: 'oov-icon', style: styles, dangerouslySetInnerHTML: createSvg(_featherIcons2.default.icons[type].toSvg({ color: color, width: width, height: height })) }, otherProps));
    };

    return Icon;
  }(_react.Component);

  Icon.propTypes = {
    type: _propTypes2.default.string.isRequired,
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Icon.defaultProps = {
    color: '#000000',
    size: '18'
  };

  exports.default = Icon;
});