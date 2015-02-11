System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, UiNavAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiNavAside = _export("UiNavAside", (function () {
        function UiNavAside(element) {
          _classCallCheck(this, UiNavAside);

          this.element = element;


          this.addClass = function () {
            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
            this.element.classList.add.apply(this.element.classList, args);
          };


          this.removeClass = function () {
            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
            this.element.classList.remove.apply(this.element.classList, args);
          };
        }

        _prototypeProperties(UiNavAside, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value").withProperty("open").withProperty("fixed").withProperty("side");
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
          attached: {
            value: function attached(element) {
              var classList = ["ui-aside", "ui-aside-nav", "aside-" + this.side];
              this.fixed && classList.push("aside-fixed");
              this.addClass(classList);
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate() {},
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind() {},
            writable: true,
            configurable: true
          },
          openChanged: {
            value: function openChanged(newValue) {
              if (newValue) {
                this.addClass("aside-open");
              } else {
                this.removeClass("aside-open");
              }
            },
            writable: true,
            configurable: true
          }
        });

        return UiNavAside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFVBQVU7OztBQUZmLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUVILGdCQUFVO0FBbUJSLGlCQW5CRixVQUFVLENBbUJQLE9BQU87Z0NBbkJWLFVBQVU7O0FBb0JmLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBOzs7QUFNdEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxZQUFVO0FBQ3RCLGdCQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDakUsZ0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7V0FFakUsQ0FBQTs7O0FBR0QsY0FBSSxDQUFDLFdBQVcsR0FBRyxZQUFVO0FBRTNCLGdCQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDakUsZ0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7V0FFbEUsQ0FBQTtTQUVKOzs2QkF4Q1EsVUFBVTtBQUdaLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUU5Qjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBRVYscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVyQjs7Ozs7QUEwQkQsa0JBQVE7bUJBQUEsa0JBQUMsT0FBTyxFQUFDO0FBQ2Isa0JBQUksU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLGNBQWMsYUFBVyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUE7QUFDbEUsa0JBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUMzQyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUUzQjs7OztBQUdELGtCQUFRO21CQUFBLG9CQUFFLEVBR1Q7Ozs7QUFHRCxjQUFJO21CQUFBLGdCQUFFLEVBR0w7Ozs7QUFHRCxxQkFBVzttQkFBQSxxQkFBQyxRQUFRLEVBQUM7QUFFbkIsa0JBQUcsUUFBUSxFQUFFO0FBQ1Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7ZUFBRSxNQUM1QjtBQUNGLG9CQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO2VBQUU7YUFFcEM7Ozs7OztlQXRFUSxVQUFVIiwiZmlsZSI6InVpLW5hdi1hc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9