System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavAside;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavAside = _export("NavAside", (function () {
        function NavAside(options) {
          _classCallCheck(this, NavAside);

          this.open = options.open || false;
          this.side = options.side || "right";
          this.fixed = options.fixed || true;
        }

        _prototypeProperties(NavAside, {
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

        return NavAside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsUUFBUTs7O0FBRmIsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsY0FBUTtBQVVOLGlCQVZGLFFBQVEsQ0FVTCxPQUFPO2dDQVZWLFFBQVE7O0FBWWIsY0FBSSxDQUFDLElBQUksR0FBSSxPQUFPLENBQUMsSUFBSSxJQUFLLEtBQUssQ0FBQztBQUNwQyxjQUFJLENBQUMsSUFBSSxHQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUssT0FBTyxDQUFDO0FBQ3RDLGNBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7U0FFdEM7OzZCQWhCUSxRQUFRO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxTQUFTLENBQ1gsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBRTVCOzs7OztBQVlELGdCQUFNO21CQUFBLGtCQUFFO0FBRUosa0JBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRTFCOzs7Ozs7ZUF2QlEsUUFBUSIsImZpbGUiOiJOYXZBc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9