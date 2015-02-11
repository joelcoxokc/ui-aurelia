System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Aside;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Aside = _export("Aside", (function () {
        function Aside(options) {
          _classCallCheck(this, Aside);

          this.open = options.open || false;
          this.side = options.side || "right";
          this.fixed = options.fixed || true;
        }

        _prototypeProperties(Aside, {
          metadata: {
            value: function metadata() {
              return Behaviore.withProperty("open");
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

        return Aside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsS0FBSzs7O0FBRlYsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsV0FBSztBQVVILGlCQVZGLEtBQUssQ0FVRixPQUFPO2dDQVZWLEtBQUs7O0FBWVYsY0FBSSxDQUFDLElBQUksR0FBSSxPQUFPLENBQUMsSUFBSSxJQUFLLEtBQUssQ0FBQztBQUNwQyxjQUFJLENBQUMsSUFBSSxHQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUssT0FBTyxDQUFDO0FBQ3RDLGNBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7U0FFdEM7OzZCQWhCUSxLQUFLO0FBRVAsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxTQUFTLENBQ1gsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBRTVCOzs7OztBQVlELGdCQUFNO21CQUFBLGtCQUFFO0FBRUosa0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRTFCOzs7Ozs7ZUF2QlEsS0FBSyIsImZpbGUiOiJhc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9