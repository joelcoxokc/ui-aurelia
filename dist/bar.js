System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Bar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Bar = _export("Bar", (function () {
        function Bar(options) {
          _classCallCheck(this, Bar);
        }

        _prototypeProperties(Bar, {
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


              this.barId = options.barId;
              this.open = options.open || false;
              this.side = options.side || "right";
              this.fixed = options.fixed || true;
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

        return Bar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILEdBQUc7OztBQUZSLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILFNBQUc7QUFVRCxpQkFWRixHQUFHLENBVUEsT0FBTztnQ0FWVixHQUFHO1NBWVg7OzZCQVpRLEdBQUc7QUFFTCxrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7YUFFNUI7Ozs7O0FBUUQsa0JBQVE7bUJBQUEsa0JBQUMsT0FBTyxFQUFDOzs7QUFHYixrQkFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO0FBQzFCLGtCQUFJLENBQUMsSUFBSSxHQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUssS0FBSyxDQUFDO0FBQ3BDLGtCQUFJLENBQUMsSUFBSSxHQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUssT0FBTyxDQUFDO0FBQ3RDLGtCQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO2FBQ3RDOzs7O0FBRUQsZ0JBQU07bUJBQUEsa0JBQUU7QUFFSixrQkFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFFMUI7Ozs7OztlQTVCUSxHQUFHIiwiZmlsZSI6ImJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9