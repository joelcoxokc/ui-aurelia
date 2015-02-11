System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, UiAurelia;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiAurelia = _export("UiAurelia", (function () {
        function UiAurelia(element) {
          _classCallCheck(this, UiAurelia);

          this.element = element;
        }

        _prototypeProperties(UiAurelia, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("ui-aurelia").withProperty("value", "valueChanged", "ui-aurelia");
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
              this.valueChanged(this.value);
              console.log("ui-class", this);
            },
            writable: true,
            configurable: true
          },
          valueChanged: {
            value: function valueChanged(newValue) {
              var _this = this;
              Object.keys(newValue).forEach(function (className) {
                _this.element.classList[newValue[className] ? "add" : "remove"](className);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return UiAurelia;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWF1cmVsaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxTQUFTOzs7QUFGZCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxlQUFTO0FBVVQsaUJBVkEsU0FBUyxDQVVSLE9BQU87Z0NBVlIsU0FBUzs7QUFXbEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVpVLFNBQVM7QUFDYixrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FDOUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQ25EO2FBQ0o7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFNckMsY0FBSTttQkFBQyxnQkFBRztBQUVOLGtCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDOUI7Ozs7QUFFRCxzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUM7O0FBQ3BCLG9CQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUN6QyxzQkFBSyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7ZUFDM0UsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQXhCVSxTQUFTIiwiZmlsZSI6InVpLWF1cmVsaWEuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==