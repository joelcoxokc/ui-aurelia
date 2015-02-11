System.register(["aurelia-framework", "./bar", "./message"], function (_export) {
  "use strict";

  var Behavior, Bar, MsgPublisher, MsgSubscriber, _prototypeProperties, _classCallCheck, UiNavBarCustomElement;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_bar) {
      Bar = _bar.Bar;
    }, function (_message) {
      MsgPublisher = _message.MsgPublisher;
      MsgSubscriber = _message.MsgSubscriber;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiNavBarCustomElement = _export("UiNavBarCustomElement", (function () {
        function UiNavBarCustomElement(element) {
          _classCallCheck(this, UiNavBarCustomElement);

          this.showing = false;
          this.element = element;
        }

        _prototypeProperties(UiNavBarCustomElement, {
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
          attached: {
            value: function attached() {
              console.log(this.aside);
            },
            writable: true,
            configurable: true
          },
          open: {
            value: function open() {
              this.showing = !this.showing;
            },
            writable: true,
            configurable: true
          }
        });

        return UiNavBarCustomElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLEdBQUcsRUFDSCxZQUFZLEVBQ1osYUFBYSx5Q0FFUixxQkFBcUI7OztBQUwxQixjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsU0FBRyxRQUFILEdBQUc7O0FBQ0gsa0JBQVksWUFBWixZQUFZO0FBQ1osbUJBQWEsWUFBYixhQUFhOzs7Ozs7O0FBRVIsMkJBQXFCO0FBYXJCLGlCQWJBLHFCQUFxQixDQWFwQixPQUFPO2dDQWJSLHFCQUFxQjs7QUFjOUIsY0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FFeEI7OzZCQWpCVSxxQkFBcUI7QUFFekIsZ0JBQU07bUJBQUEsa0JBQUc7QUFBQyxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQUM7Ozs7QUFFM0Isa0JBQVE7bUJBQUEsb0JBQUU7OztBQUdkLHFCQUFPLFFBQVEsQ0FDWixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN6Qjs7Ozs7QUFVRixrQkFBUTttQkFBQSxvQkFBRTtBQUVSLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUd4Qjs7OztBQUNELGNBQUk7bUJBQUEsZ0JBQUc7QUFDTCxrQkFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDOUI7Ozs7OztlQTVCVSxxQkFBcUIiLCJmaWxlIjoidWktbmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9