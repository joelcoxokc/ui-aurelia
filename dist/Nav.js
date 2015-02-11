System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Nav;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Nav = _export("Nav", (function () {
        function Nav(options) {
          _classCallCheck(this, Nav);

          this.open = options.open || false;
          this.side = options.side || "right";
          this.fixed = options.fixed || true;
        }

        _prototypeProperties(Nav, {
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

        return Nav;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILEdBQUc7OztBQUZSLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILFNBQUc7QUFVRCxpQkFWRixHQUFHLENBVUEsT0FBTztnQ0FWVixHQUFHOztBQVlSLGNBQUksQ0FBQyxJQUFJLEdBQUksT0FBTyxDQUFDLElBQUksSUFBSyxLQUFLLENBQUM7QUFDcEMsY0FBSSxDQUFDLElBQUksR0FBSSxPQUFPLENBQUMsSUFBSSxJQUFLLE9BQU8sQ0FBQztBQUN0QyxjQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1NBRXRDOzs2QkFoQlEsR0FBRztBQUVMLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sU0FBUyxDQUNYLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUU1Qjs7Ozs7QUFZRCxnQkFBTTttQkFBQSxrQkFBRTtBQUVKLGtCQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUUxQjs7Ozs7O2VBdkJRLEdBQUciLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=