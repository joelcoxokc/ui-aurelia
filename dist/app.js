System.register(["aurelia-router", "aurelia-framework"], function (_export) {
  "use strict";

  var Router, Behaviore, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      Behaviore = _aureliaFramework.Behaviore;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.right = new Aside({ open: false, fixed: true, side: "left" });
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);

          });

        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, Element];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sU0FBUyx5Q0FFSixHQUFHOzs7QUFIUixZQUFNLGtCQUFOLE1BQU07O0FBQ04sZUFBUyxxQkFBVCxTQUFTOzs7Ozs7O0FBRUosU0FBRztBQU1ELGlCQU5GLEdBQUcsQ0FNQSxNQUFNO2dDQU5ULEdBQUc7O0FBUVIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtBQUM3RCxjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDakIsVUFBQSxNQUFNLEVBQUk7QUFFTixrQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FFUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUNoRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVMsUUFBUSxFQUFFLFFBQVEsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQy9ELEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUV4RixDQUFDLENBQUM7O1dBR04sQ0FBQyxDQUFDOztTQUdWOzs2QkExQlEsR0FBRztBQUdMLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBSHBDLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=