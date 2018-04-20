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
    type: _propTypes2.default.oneOf(['activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-down', 'arrow-left-circle', 'arrow-left', 'arrow-right-circle', 'arrow-right', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'arrow-up', 'at-sign', 'award', 'bar-chart-2', 'bar-chart', 'battery-charging', 'battery', 'bell-off', 'bell', 'bluetooth', 'bold', 'book-open', 'book', 'bookmark', 'box', 'briefcase', 'calendar', 'camera-off', 'camera', 'cast', 'check-circle', 'check-square', 'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'cloud', 'code', 'codepen', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'dollar-sign', 'download-cloud', 'download', 'droplet', 'edit-2', 'edit-3', 'edit', 'external-link', 'eye-off', 'eye', 'facebook', 'fast-forward', 'feather', 'file-minus', 'file-plus', 'file-text', 'file', 'film', 'filter', 'flag', 'folder-minus', 'folder-plus', 'folder', 'gift', 'git-branch', 'git-commit', 'git-merge', 'git-pull-request', 'github', 'gitlab', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'layers', 'layout', 'life-buoy', 'link-2', 'link', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map-pin', 'map', 'maximize-2', 'maximize', 'menu', 'message-circle', 'message-square', 'mic-off', 'mic', 'minimize-2', 'minimize', 'minus-circle', 'minus-square', 'minus', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'move', 'music', 'navigation-2', 'navigation', 'octagon', 'package', 'paperclip', 'pause-circle', 'pause', 'percent', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'phone', 'pie-chart', 'play-circle', 'play', 'plus-circle', 'plus-square', 'plus', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share-2', 'share', 'shield-off', 'shield', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'trash-2', 'trash', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload-cloud', 'upload', 'user-check', 'user-minus', 'user-plus', 'user-x', 'user', 'users', 'video-off', 'video', 'voicemail', 'volume-1', 'volume-2', 'volume-x', 'volume', 'watch', 'wifi-off', 'wifi', 'wind', 'x-circle', 'x-square', 'x', 'youtube', 'zap-off', 'zap', 'zoom-in', 'zoom-out']).isRequired,
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  };

  Icon.defaultProps = {
    color: '#000000',
    size: '18'
  };

  exports.default = Icon;
});