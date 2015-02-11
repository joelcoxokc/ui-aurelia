System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavAside = _export("NavAside", (function () {
        function NavAside(element) {
          _classCallCheck(this, NavAside);

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

        _prototypeProperties(NavAside, {
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
              var classList = ["mz-aside", "mz-aside-nav", "aside-" + this.side];
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

        return NavAside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFFBQVE7OztBQUZiLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUVILGNBQVE7QUFtQk4saUJBbkJGLFFBQVEsQ0FtQkwsT0FBTztnQ0FuQlYsUUFBUTs7QUFvQmIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7OztBQU10QixjQUFJLENBQUMsUUFBUSxHQUFHLFlBQVU7QUFDdEIsZ0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtBQUNqRSxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtXQUVqRSxDQUFBOzs7QUFHRCxjQUFJLENBQUMsV0FBVyxHQUFHLFlBQVU7QUFFM0IsZ0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtBQUNqRSxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtXQUVsRSxDQUFBO1NBRUo7OzZCQXhDUSxRQUFRO0FBR1Ysa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBRTlCOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFFVixxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRXJCOzs7OztBQTBCRCxrQkFBUTttQkFBQSxrQkFBQyxPQUFPLEVBQUM7QUFDYixrQkFBSSxTQUFTLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxhQUFXLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtBQUNsRSxrQkFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQzNDLGtCQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBRTNCOzs7O0FBR0Qsa0JBQVE7bUJBQUEsb0JBQUUsRUFHVDs7OztBQUdELGNBQUk7bUJBQUEsZ0JBQUUsRUFHTDs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLFFBQVEsRUFBQztBQUVuQixrQkFBRyxRQUFRLEVBQUU7QUFDVCxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtlQUFFLE1BQzVCO0FBQ0Ysb0JBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7ZUFBRTthQUVwQzs7Ozs7O2VBdEVRLFFBQVEiLCJmaWxlIjoibmF2LWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=