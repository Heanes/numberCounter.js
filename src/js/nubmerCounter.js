/**
 * @doc 计数器
 * @author Heanes
 * @time 2017-06-14 11:41:38 周三
 */

;(function($, window, document, undefined){
    "use strict";
    var pluginName = 'numberCounter';
    var _default = {};
    _default.setting = {
        setMaxNumber: false,    // 是否设置最大数
        maxNumber: 100000,      // 最大计数数字
        initValue: 0,           // 初始化显示的数值
        delayMillisecond: 500,  // 计数翻动时的动画延时(毫秒单位)
    };

    var NumberCounter = function (element, options) {
        this.element = element;
        this.settings = $.extend({}, _default.setting, options);
        this._defaults = _default;
        this._name = pluginName;
        this.version = 'v1.0.0';
        this.init();
    }

    NumberCounter.prototype = {
        init: function (options) {
            ;
        },

        createContainer: function (options) {
            var $container = $('<div class="number-counter-wrap">');
            return $container;
        },

        getValue: function (options) {
            ;
        },

        setValue: function (options) {
            ;
        }
    };

    function logError(message) {
        if(window.console){
            window.console.error(message);
        }
    }

    $.fn[pluginName] = function (options, args) {
        var result;
        this.each(function () {
            var _this = $.data(this, pluginName);
            if (typeof options === 'string') {
                if (!_this) {
                    logError('Not initialized, can not call method : ' + options);
                }
                else if (!$.isFunction(_this[options]) || options.charAt(0) === '_') {
                    logError('No such method : ' + options);
                }
                else {
                    if (!(args instanceof Array)) {
                        args = [ args ];
                    }
                    result = _this[options].apply(_this, args);
                }
            }
            else if (typeof options === 'boolean') {
                result = _this;
            }
            else {
                $.data(this, pluginName, new NumberCounter(this, $.extend(true, {}, options)));
            }
        });
        return result || this;
    };

})(jQuery, window, document);