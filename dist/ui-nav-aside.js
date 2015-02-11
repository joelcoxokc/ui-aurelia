System.register(["aurelia-templating", "./aside"], function (_export) {
  "use strict";

  var Behavior, Aside, _prototypeProperties, _classCallCheck, defaults, UiNavAsideCustomElement;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aside) {
      Aside = _aside.Aside;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = {
        asideId: "aside1",
        side: "left",
        open: false,
        fixed: true
      };
      UiNavAsideCustomElement = _export("UiNavAsideCustomElement", (function () {
        function UiNavAsideCustomElement(element) {
          _classCallCheck(this, UiNavAsideCustomElement);




          this.element = element;


          this.addClass = function () {
            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
            this.element.classList.add.apply(this.element.classList, args);
          };


          this.removeClass = function () {
            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
            this.element.classList.remove.apply(this.element.classList, args);
          };
        }

        _prototypeProperties(UiNavAsideCustomElement, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("open").withProperty("fixed").withProperty("side").withProperty("size");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var classList = ["ui-aside", "ui-aside-nav", "aside-" + this.side];
              this.fixed && classList.push("aside-fixed");
              this.addClass(classList);
            },
            writable: true,
            configurable: true
          },
          openChanged: {
            value: function openChanged(newValue) {
              console.log(newValue);
              if (newValue) {
                this.addClass("aside-open");
              } else {
                this.removeClass("aside-open");
              }
            },
            writable: true,
            configurable: true
          }
        });

        return UiNavAsideCustomElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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