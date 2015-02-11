System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, UiNavBar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiNavBar = _export("UiNavBar", (function () {
        function UiNavBar(element) {
          _classCallCheck(this, UiNavBar);

          this.showing = false;
          this.element = element;
        }

        _prototypeProperties(UiNavBar, {
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

        return UiNavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxRQUFROzs7QUFGYixjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxjQUFRO0FBUVIsaUJBUkEsUUFBUSxDQVFQLE9BQU87Z0NBUlIsUUFBUTs7QUFTakIsY0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVhVLFFBQVE7QUFDWixnQkFBTTttQkFBQSxrQkFBRztBQUFDLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFBQzs7OztBQUMzQixrQkFBUTttQkFBQSxvQkFBRTtBQUNkLHFCQUFPLFFBQVEsQ0FDWixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUV6Qjs7Ozs7QUFLRixjQUFJO21CQUFBLGdCQUFHO0FBQ0wsa0JBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlCOzs7Ozs7ZUFkVSxRQUFRIiwiZmlsZSI6InVpLW5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==