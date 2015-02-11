System.register(["aurelia-templating", "./ui-nav"], function (_export) {
  "use strict";

  var Behavior, Nav, _prototypeProperties, _classCallCheck, UiAurelia;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_uiNav) {
      Nav = _uiNav.Nav;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiAurelia = _export("UiAurelia", (function () {
        function UiAurelia(element, nav) {
          _classCallCheck(this, UiAurelia);

          this.nav = nav;
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
              return [Element, Nav];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              console.log(this);
            },
            writable: true,
            configurable: true
          },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWF1cmVsaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLEdBQUcseUNBRUUsU0FBUzs7O0FBSGQsY0FBUSxzQkFBUixRQUFROztBQUNSLFNBQUcsVUFBSCxHQUFHOzs7Ozs7O0FBRUUsZUFBUztBQWlCUCxpQkFqQkYsU0FBUyxDQWlCTixPQUFPLEVBQUUsR0FBRztnQ0FqQmYsU0FBUzs7QUFrQmQsY0FBSSxDQUFDLEdBQUcsR0FBTyxHQUFHLENBQUE7QUFDbEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDekI7OzZCQXBCUSxTQUFTO0FBRVgsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQzlCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUNuRDthQUVSOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFFWixxQkFBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUV6Qjs7Ozs7QUFRRCxrQkFBUTttQkFBQSxvQkFBRTtBQUVOLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBRXBCOzs7O0FBR0QsY0FBSTttQkFBQyxnQkFBRztBQUVKLGtCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDaEM7Ozs7QUFHRCxzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUM7O0FBQ2xCLG9CQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUN2QyxzQkFBSyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7ZUFDN0UsQ0FBQyxDQUFDO2FBQ047Ozs7OztlQXpDUSxTQUFTIiwiZmlsZSI6InVpLWF1cmVsaWEuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==