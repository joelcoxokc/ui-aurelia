System.register(["aurelia-framework", "./bar", "./message", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, Bar, MsgPublisher, MsgSubscriber, UiElement, _prototypeProperties, _inherits, _classCallCheck, UiNavBarCustomElement;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_bar) {
      Bar = _bar.Bar;
    }, function (_message) {
      MsgPublisher = _message.MsgPublisher;
      MsgSubscriber = _message.MsgSubscriber;
    }, function (_uiElement) {
      UiElement = _uiElement.UiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiNavBarCustomElement = _export("UiNavBarCustomElement", (function (UiElement) {
        function UiNavBarCustomElement(element) {
          _classCallCheck(this, UiNavBarCustomElement);

          this.showing = false;
          this.barId = "bar1";
          this.open = false;
          this.fixed = true;
          this.size = "sm";
          this.ripple = true;
        }

        _inherits(UiNavBarCustomElement, UiElement);

        _prototypeProperties(UiNavBarCustomElement, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("aside").withProperty("showing");

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
            value: function bind() {},
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
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLEdBQUcsRUFDSCxZQUFZLEVBQ1osYUFBYSxFQUNiLFNBQVMsb0RBRUoscUJBQXFCOzs7QUFOMUIsY0FBUSxxQkFBUixRQUFROztBQUNSLFNBQUcsUUFBSCxHQUFHOztBQUNILGtCQUFZLFlBQVosWUFBWTtBQUNaLG1CQUFhLFlBQWIsYUFBYTs7QUFDYixlQUFTLGNBQVQsU0FBUzs7Ozs7Ozs7O0FBRUosMkJBQXFCLCtDQUFTLFNBQVM7QUFxQnJDLGlCQXJCRixxQkFBcUIsQ0FxQmxCLE9BQU87Z0NBckJWLHFCQUFxQjs7QUF1QjVCLGNBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0FBQ3BCLGNBQUksQ0FBQyxLQUFLLEdBQUssTUFBTSxDQUFBO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLEdBQU0sS0FBSyxDQUFBO0FBQ3BCLGNBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxDQUFBO0FBQ25CLGNBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFBO0FBQ25CLGNBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDO1NBQ3JCOztrQkE3QlEscUJBQXFCLEVBQVMsU0FBUzs7NkJBQXZDLHFCQUFxQjtBQUd2QixrQkFBUTttQkFBQSxvQkFBRTtBQUVkLHFCQUFPLFFBQVEsQ0FDWixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzthQUc1Qjs7OztBQUdNLGdCQUFNO21CQUFBLGtCQUFHO0FBRWQscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVqQjs7Ozs7QUFhRCxjQUFJO21CQUFBLGdCQUFFLEVBQ0w7Ozs7QUFFRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBRWhDOzs7Ozs7ZUF0Q1EscUJBQXFCO1NBQVMsU0FBUyIsImZpbGUiOiJ1aS1uYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9