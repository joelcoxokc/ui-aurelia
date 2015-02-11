System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavBar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar(element) {
          _classCallCheck(this, NavBar);

          this.showing = false;
          this.element = element;
        }

        _prototypeProperties(NavBar, {
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          },
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("aside");
            },
            writable: true,
            configurable: true
          }
        }, {
          open: {
            value: function open() {
              this.showing = !this.showing;
            },
            writable: true,
            configurable: true
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBUU4saUJBUkEsTUFBTSxDQVFMLE9BQU87Z0NBUlIsTUFBTTs7QUFTZixjQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtBQUNwQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7NkJBWFUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUFHO0FBQUMscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUFDOzs7O0FBQzNCLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2QscUJBQU8sUUFBUSxDQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRXpCOzs7OztBQUtGLGNBQUk7bUJBQUEsZ0JBQUc7QUFDTCxrQkFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDOUI7Ozs7OztlQWRVLE1BQU0iLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9