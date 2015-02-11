System.register(["aurelia-framework", "./aside", "./bar"], function (_export) {
  "use strict";

  var Behavior, Aside, Bar, _prototypeProperties, _classCallCheck, Nav;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aside) {
      Aside = _aside.Aside;
    }, function (_bar) {
      Bar = _bar.Bar;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Nav = _export("Nav", (function () {
        function Nav(aside, bar) {
          _classCallCheck(this, Nav);

          this.$aside = aside;
          this.$bar = bar;
        }

        _prototypeProperties(Nav, {
          metadata: {
            value: function metadata() {
              return Behaviore.withProperty("open");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Aside, Bar];
            },
            writable: true,
            configurable: true
          }
        }, {
          toggle: {
            value: function toggle() {
              this.open = !this.open;
            },
            writable: true,
            configurable: true
          }
        });

        return Nav;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsS0FBSyxFQUNMLEdBQUcseUNBRUUsR0FBRzs7O0FBSlIsY0FBUSxxQkFBUixRQUFROztBQUNSLFdBQUssVUFBTCxLQUFLOztBQUNMLFNBQUcsUUFBSCxHQUFHOzs7Ozs7O0FBRUUsU0FBRztBQWVELGlCQWZGLEdBQUcsQ0FlQSxLQUFLLEVBQUUsR0FBRztnQ0FmYixHQUFHOztBQWdCUixjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFLLEdBQUcsQ0FBQTtTQUNwQjs7NkJBbEJRLEdBQUc7QUFFTCxrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFNBQVMsQ0FDWCxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7YUFFNUI7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUVaLHFCQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2FBRXRCOzs7OztBQVFELGdCQUFNO21CQUFBLGtCQUFFO0FBRUosa0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRTFCOzs7Ozs7ZUF6QlEsR0FBRyIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==