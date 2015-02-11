System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, _prototypeProperties, _classCallCheck, UiToggleTemplateController;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiToggleTemplateController = _export("UiToggleTemplateController", (function () {
        function UiToggleTemplateController(viewFactory, viewSlot) {
          _classCallCheck(this, UiToggleTemplateController);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
        }

        _prototypeProperties(UiToggleTemplateController, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("ui-toggle").withProperty("value", "valueChanged", "ui-toggle");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(val) {
              !this.view;
              console.log(this.view);
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              console.log(this);
              this.element.classList.add("aside-toggle");
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              this.aside.toggle();
            },
            writable: true,
            configurable: true
          }
        });

        return UiToggleTemplateController;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLXRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSx5Q0FFN0IsMEJBQTBCOzs7QUFGakMsY0FBUSxzQkFBUixRQUFRO0FBQUUsc0JBQWdCLHNCQUFoQixnQkFBZ0I7QUFBRSxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFFN0IsZ0NBQTBCO0FBaUIxQixpQkFqQkEsMEJBQTBCLENBaUJ6QixXQUFXLEVBQUUsUUFBUTtnQ0FqQnRCLDBCQUEwQjs7QUFtQmpDLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxRQUFRLEdBQU0sUUFBUSxDQUFDO0FBQzVCLGNBQUksQ0FBQyxPQUFPLEdBQU8sS0FBSyxDQUFDO1NBRzVCOzs2QkF4QlUsMEJBQTBCO0FBQzlCLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNaLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUMvQixZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUd6RDs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBRVoscUJBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQTthQUVwQzs7Ozs7QUFhSCxzQkFBWTttQkFBQSxzQkFBQyxHQUFHLEVBQUM7QUFDZixBQUFDLGVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNaLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQWlCdkI7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUVSLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7YUFFM0M7Ozs7QUFFRCxnQkFBTTttQkFBQSxrQkFBRTtBQUNOLGtCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JCOzs7Ozs7ZUF4RFUsMEJBQTBCIiwiZmlsZSI6InVpLXRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9