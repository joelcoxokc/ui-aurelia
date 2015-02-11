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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLmNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsU0FBUzs7O0FBRmQsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBRUgsZUFBUztBQVVULGlCQVZBLFNBQVMsQ0FVUixPQUFPO2dDQVZSLFNBQVM7O0FBV2xCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzs2QkFaVSxTQUFTO0FBQ2Isa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQzlCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUNyRDthQUNGOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBTXJDLGNBQUk7bUJBQUMsZ0JBQUc7QUFDTixrQkFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7Ozs7OztlQWhCVSxTQUFTIiwiZmlsZSI6InVpLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=