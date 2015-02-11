System.register(["aurelia-templating", "./Nav"], function (_export) {
  "use strict";

  var Behavior, Nav, _prototypeProperties, _classCallCheck, UiNavAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_Nav) {
      Nav = _Nav.Nav;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsR0FBRyx5Q0FFRSxVQUFVOzs7QUFIZixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsU0FBRyxRQUFILEdBQUc7Ozs7Ozs7QUFFRSxnQkFBVTtBQW1CUixpQkFuQkYsVUFBVSxDQW1CUCxPQUFPO2dDQW5CVixVQUFVOztBQW9CZixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTs7O0FBTXRCLGNBQUksQ0FBQyxRQUFRLEdBQUcsWUFBVTtBQUN0QixnQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFBO0FBQ2pFLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1dBRWpFLENBQUE7OztBQUdELGNBQUksQ0FBQyxXQUFXLEdBQUcsWUFBVTtBQUUzQixnQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFBO0FBQ2pFLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1dBRWxFLENBQUE7U0FFSjs7NkJBeENRLFVBQVU7QUFHWixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDUixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7YUFFOUI7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUVWLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFckI7Ozs7O0FBMEJELGtCQUFRO21CQUFBLGtCQUFDLE9BQU8sRUFBQztBQUNiLGtCQUFJLFNBQVMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLGFBQVcsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQ2xFLGtCQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0Msa0JBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFM0I7Ozs7QUFHRCxrQkFBUTttQkFBQSxvQkFBRSxFQUdUOzs7O0FBR0QsY0FBSTttQkFBQSxnQkFBRSxFQUdMOzs7O0FBR0QscUJBQVc7bUJBQUEscUJBQUMsUUFBUSxFQUFDO0FBRW5CLGtCQUFHLFFBQVEsRUFBRTtBQUNULG9CQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO2VBQUUsTUFDNUI7QUFDRixvQkFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtlQUFFO2FBRXBDOzs7Ozs7ZUF0RVEsVUFBVSIsImZpbGUiOiJ1aS1uYXYtYXNpZGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==