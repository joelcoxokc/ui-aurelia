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
        function Aside() {
          _classCallCheck(this, Aside);
        }

        _prototypeProperties(Aside, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("open");
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(options) {
              this.asideId = options.asideId;
              this.open = options.open || false;
              this.side = options.side || "right";
              this.fixed = options.fixed || true;
              console.log("Aside Activated");
            },
            writable: true,
            configurable: true
          },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsS0FBSzs7O0FBRlYsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsV0FBSztBQVVILGlCQVZGLEtBQUs7Z0NBQUwsS0FBSztTQWFiOzs2QkFiUSxLQUFLO0FBRVAsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBRTVCOzs7OztBQVFELGtCQUFRO21CQUFBLGtCQUFDLE9BQU8sRUFBQztBQUNiLGtCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7QUFDOUIsa0JBQUksQ0FBQyxJQUFJLEdBQU0sT0FBTyxDQUFDLElBQUksSUFBSyxLQUFLLENBQUM7QUFDdEMsa0JBQUksQ0FBQyxJQUFJLEdBQU0sT0FBTyxDQUFDLElBQUksSUFBSyxPQUFPLENBQUM7QUFDeEMsa0JBQUksQ0FBQyxLQUFLLEdBQUssT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDckMscUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUVqQzs7OztBQUdELGdCQUFNO21CQUFBLGtCQUFFO0FBRUosa0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRTFCOzs7Ozs7ZUE3QlEsS0FBSyIsImZpbGUiOiJhc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9