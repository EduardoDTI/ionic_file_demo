(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js ***!
      \*********************************************************************/

    /*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */

    /***/
    function node_modulesIonicNativeCamera__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DestinationType", function () {
        return DestinationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncodingType", function () {
        return EncodingType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaType", function () {
        return MediaType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PictureSourceType", function () {
        return PictureSourceType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function () {
        return PopoverArrowDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Direction", function () {
        return Direction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var DestinationType;

      (function (DestinationType) {
        DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
        DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
        DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
      })(DestinationType || (DestinationType = {}));

      var EncodingType;

      (function (EncodingType) {
        EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
        EncodingType[EncodingType["PNG"] = 1] = "PNG";
      })(EncodingType || (EncodingType = {}));

      var MediaType;

      (function (MediaType) {
        MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
        MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
        MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
      })(MediaType || (MediaType = {}));

      var PictureSourceType;

      (function (PictureSourceType) {
        PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
        PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
        PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
      })(PictureSourceType || (PictureSourceType = {}));

      var PopoverArrowDirection;

      (function (PopoverArrowDirection) {
        PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
        PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
        PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
        PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
        PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
      })(PopoverArrowDirection || (PopoverArrowDirection = {}));

      var Direction;

      (function (Direction) {
        Direction[Direction["BACK"] = 0] = "BACK";
        Direction[Direction["FRONT"] = 1] = "FRONT";
      })(Direction || (Direction = {}));

      var Camera =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);

        function Camera() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Constant for possible destination types
           */


          _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,

            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,

            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
          };
          /**
           * Convenience constant
           */

          _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,

            /** Return PNG encoded image */
            PNG: 1
          };
          /**
           * Convenience constant
           */

          _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,

            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,

            /** Allow selection from all media types */
            ALLMEDIA: 2
          };
          /**
           * Convenience constant
           */

          _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,

            /** Take picture from camera */
            CAMERA: 1,

            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2
          };
          /**
           * Convenience constant
           */

          _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
          };
          /**
           * Convenience constant
           */

          _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,

            /** Use the front-facing camera */
            FRONT: 1
          };
          return _this;
        }

        Camera.prototype.getPicture = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", {
            "callbackOrder": "reverse"
          }, arguments);
        };

        Camera.prototype.cleanup = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", {
            "platforms": ["iOS"]
          }, arguments);
        };

        Camera.pluginName = "Camera";
        Camera.plugin = "cordova-plugin-camera";
        Camera.pluginRef = "navigator.camera";
        Camera.repo = "https://github.com/apache/cordova-plugin-camera";
        Camera.platforms = ["Android", "Browser", "iOS", "Windows"];

        Camera.ɵfac = function Camera_Factory(t) {
          return ɵCamera_BaseFactory(t || Camera);
        };

        Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Camera,
          factory: function factory(t) {
            return Camera.ɵfac(t);
          }
        });

        var ɵCamera_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Camera);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Camera, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Camera;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtBQUMxQixJQUFDLDZEQUFZLENBQUE7QUFBQyxJQUNiLDZEQUFRLENBQUE7QUFBQyxJQUNULGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0FBQ3ZCLElBQUMsK0NBQVEsQ0FBQTtBQUFDLElBQ1QsNkNBQUcsQ0FBQTtBQUNMLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7QUFDcEIsSUFBQywrQ0FBVyxDQUFBO0FBQUMsSUFDWiwyQ0FBSyxDQUFBO0FBQUMsSUFDTixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtBQUM1QixJQUFDLHlFQUFnQixDQUFBO0FBQUMsSUFDakIsNkRBQU0sQ0FBQTtBQUFDLElBQ1AsK0VBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQU1YO0FBTkQsV0FBWSxxQkFBcUI7QUFDaEMsSUFBQyx5RUFBWSxDQUFBO0FBQUMsSUFDYiw2RUFBVSxDQUFBO0FBQUMsSUFDWCw2RUFBVSxDQUFBO0FBQUMsSUFDWCwrRUFBVyxDQUFBO0FBQUMsSUFDWiwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0FBQ3BCLElBQUMseUNBQVEsQ0FBQTtBQUFDLElBQ1QsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQUNEO0FBSVEsSUFpRG9CLDBCQUFpQjtBQUFDO0FBRTlCO0FBR0ssUUFKbkI7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLHFCQUFlLEdBQUc7QUFDcEIsWUFBSSxnS0FBZ0s7QUFDcEssWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksNEVBQTRFO0FBQ2hGLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLDBEQUEwRDtBQUM5RCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGtCQUFZLEdBQUc7QUFDakIsWUFBSSxnQ0FBZ0M7QUFDcEMsWUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFlBQUksK0JBQStCO0FBQ25DLFlBQUksR0FBRyxFQUFFLENBQUM7QUFDVixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSxlQUFTLEdBQUc7QUFDZCxZQUFJLHdHQUF3RztBQUM1RyxZQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsWUFBSSxzREFBc0Q7QUFDMUQsWUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFlBQUksMkNBQTJDO0FBQy9DLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSx1QkFBaUIsR0FBRztBQUN0QixZQUFJLDJFQUEyRTtBQUMvRSxZQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25CLFlBQUksK0JBQStCO0FBQ25DLFlBQUksTUFBTSxFQUFFLENBQUM7QUFDYixZQUFJLDhFQUE4RTtBQUNsRixZQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLDJCQUFxQixHQUFHO0FBQzFCLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsWUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixZQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGVBQVMsR0FBRztBQUNkLFlBQUksaUNBQWlDO0FBQ3JDLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLGtDQUFrQztBQUN0QyxZQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDJCQUFVLGFBQUMsT0FBdUI7QUFLUyxJQU8zQyx3QkFBTztBQUk0QztBQUFrQztBQUE2QztBQUEyQztBQUFxRTtJQTVGdk8sTUFBTSx3QkFEbEIsVUFBVSxFQUFFLFFBQ0EsTUFBTTs7Ozs7MEJBQUU7QUFBQyxpQkEvS3RCO0FBQUUsRUErSzBCLGlCQUFpQjtBQUM1QyxTQURZLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSSxcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgSlBFRyA9IDAsXG4gIFBORyxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQSxcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTSxcbn1cblxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcbiAgQVJST1dfVVAgPSAxLFxuICBBUlJPV19ET1dOLFxuICBBUlJPV19MRUZULFxuICBBUlJPV19SSUdIVCxcbiAgQVJST1dfQU5ZLFxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlQsXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAcHJlbWllciBjYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXG4gICAqL1xuICBEZXN0aW5hdGlvblR5cGUgPSB7XG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xuICAgIERBVEFfVVJMOiAwLFxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cbiAgICBGSUxFX1VSSTogMSxcbiAgICAvKiogUmV0dXJuIG5hdGl2ZSB1cmkgKGVnLiBhc3NldC1saWJyYXJ5Oi8vLi4uIGZvciBpT1MpICovXG4gICAgTkFUSVZFX1VSSTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIEVuY29kaW5nVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIEpQRUc6IDAsXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIFBORzogMSxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBQSE9UT0xJQlJBUlkgZm9yIEFuZHJvaWQpICovXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cbiAgICBDQU1FUkE6IDEsXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xuICAgIEFSUk9XX1VQOiAxLFxuICAgIEFSUk9XX0RPV046IDIsXG4gICAgQVJST1dfTEVGVDogNCxcbiAgICBBUlJPV19SSUdIVDogOCxcbiAgICBBUlJPV19BTlk6IDE1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGEgcGljdHVyZSBvciB2aWRlbywgb3IgbG9hZCBvbmUgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGludGVybWVkaWF0ZSBpbWFnZSBmaWxlcyB0aGF0IGFyZSBrZXB0IGluIHRlbXBvcmFyeSBzdG9yYWdlIGFmdGVyIGNhbGxpbmcgY2FtZXJhLmdldFBpY3R1cmUuXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

      /***/

    },

    /***/
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js ***!
      \***************************************************************************/

    /*! exports provided: FileChooser */

    /***/
    function node_modulesIonicNativeFileChooser__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileChooser", function () {
        return FileChooser;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var FileChooser =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileChooser, _super);

        function FileChooser() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        FileChooser.prototype.open = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "open", {}, arguments);
        };

        FileChooser.pluginName = "FileChooser";
        FileChooser.plugin = "cordova-plugin-filechooser";
        FileChooser.pluginRef = "fileChooser";
        FileChooser.repo = "https://github.com/ihadeed/cordova-filechooser";
        FileChooser.platforms = ["Android"];

        FileChooser.ɵfac = function FileChooser_Factory(t) {
          return ɵFileChooser_BaseFactory(t || FileChooser);
        };

        FileChooser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: FileChooser,
          factory: function factory(t) {
            return FileChooser.ɵfac(t);
          }
        });

        var ɵFileChooser_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FileChooser);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileChooser, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return FileChooser;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS1jaG9vc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdRLElBbUN5QiwrQkFBaUI7QUFBQztBQUcvQztBQUF5RTtBQUFNLElBSWpGLDBCQUFJLGFBQUMsT0FBNEI7QUFJdEI7QUFBNEM7QUFBdUQ7QUFBMkM7QUFBeUU7SUFYdk4sV0FBVyx3QkFEdkIsVUFBVSxFQUFFLFFBQ0EsV0FBVzs7Ozs7MEJBQUU7QUFBQyxzQkF4QzNCO0FBQUUsRUF3QytCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVDaG9vc2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBjb21tYSBzZXBlcmF0ZWQgbWltZSB0eXBlcyB0byBmaWx0ZXIgZmlsZXMuXG4gICAqL1xuICBtaW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRmlsZSBDaG9vc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBPcGVucyB0aGUgZmlsZSBwaWNrZXIgb24gQW5kcm9pZCBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGEgZmlsZSwgcmV0dXJucyBhIGZpbGUgVVJJLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZUNob29zZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUtY2hvb3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZUNob29zZXI6IEZpbGVDaG9vc2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGVDaG9vc2VyLm9wZW4oKVxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEZpbGVDaG9vc2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVDaG9vc2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZWNob29zZXInLFxuICBwbHVnaW5SZWY6ICdmaWxlQ2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWhhZGVlZC9jb3Jkb3ZhLWZpbGVjaG9vc2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZUNob29zZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIGEgZmlsZVxuICAgKiBAcGFyYW0ge0ZpbGVDaG9vc2VyT3B0aW9uc30gW29wdGlvbnNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvICcnLiBGaWx0ZXJzIHRoZSBmaWxlIHNlbGVjdGlvbiBsaXN0IGFjY29yZGluZyB0byBtaW1lIHR5cGVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW4ob3B0aW9ucz86IEZpbGVDaG9vc2VyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-button expand=\"full\" (click)=\"openCamera()\">Camera</ion-button>\n    <ion-button expand=\"full\" (click)=\"chooseFile()\">System file</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/api-externa.service.ts":
    /*!****************************************!*\
      !*** ./src/app/api-externa.service.ts ***!
      \****************************************/

    /*! exports provided: ApiExternaService */

    /***/
    function srcAppApiExternaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiExternaService", function () {
        return ApiExternaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ApiExternaService = /*#__PURE__*/function () {
        function ApiExternaService(http) {
          _classCallCheck(this, ApiExternaService);

          this.http = http;
          this.url = 'http://127.0.0.1:8000/api/afiliados';
          this.key = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZTE5Njk3Y2M2ZmQ5NGNlZGRjZGU4ODQ1ZGI2YzIxODY5ZjlkNWU3NzhkNTA5YWRlODUwYmIzOGUzOTc4ZWM5YTUxOWU4ZDc1M2NmMDdlZTkiLCJpYXQiOjE2MDc2OTg1NjksIm5iZiI6MTYwNzY5ODU2OSwiZXhwIjoxNjM5MjM0NTY5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.vR2vEa4fNFFA0mpqYSfF9o-5d4Meowrm1VZF5py5PdjCrs4VLumoDkrV2bCcIG6Um6GK43lb4j8LylReyNQhr-tDT-EukuEFZAfdbdkfu5EWqFXMAUcxpyNieNuMu0DxiZNPTfHM8Q_hgGw8bMtfdrpe1hDqPu4Pcbycw6FTa_FrMjQeFsf5FyjUl5Dw0VSycakYGLrxh2dteKK0srDNRVp3B3Dlayf9KqP8x07fqLNkF7OsRk7k7R5yKP6w3q3uRphK4bLgqH_PRBkg_GfuGIevjwBSJSxRyy4YyuW5o1yrZcQOlBcpwLwiNGTikWjeziNu7lcAMapMAU5QN1ziUzISDtEVQ5MC8_6a6SfvhmeWK3yripjJeuEcrmJ2SaI4y_4yXZTswsfSl57qamxtp4T17owW-qXmifS0EF0L7PxFqM-NFZZen8COFRqnWHi1X8QDKRCBThHPx2-sDfG3Y4HZnvwPGKo5b_1VSTEfgvDfkGAFA41r8LD9EDARh_aIyQNQTv5cyIc9Qy-FTSlayEW5lfVGuyBy7Oh3oUrM-_RH9TTn00oyvQ_rUqXwWdPSLPJ1ICwnPtJ3xirxNPRiUVnxia60Zz9--kYUHACNnapAqsXL8LAtsef41vmy22hdwAx2s-ouBOsuACUMx4ylK1MgAwpo_SUDbEFiGW0_3yA';
        }

        _createClass(ApiExternaService, [{
          key: "saveFile",
          value: function saveFile(logo) {
            var body = {
              "razao_social": "Teste afiliado",
              "nome_fantasia": "teste",
              "cnpj": 2354,
              "telefone": 8642,
              "email": "afiliado@email.com",
              "inscricao_estadual": "0000",
              "inscricao_municipal": "0000",
              "logo": logo
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'content-type': 'application/json',
              'Authorization': this.key
            });
            return this.http.post(this.url, body, {
              headers: headers
            }).toPromise();
          }
        }]);

        return ApiExternaService;
      }();

      ApiExternaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ApiExternaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ApiExternaService);
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_externa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-externa.service */
      "./src/app/api-externa.service.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(api, camera, fileChooser) {
          _classCallCheck(this, HomePage);

          this.api = api;
          this.camera = camera;
          this.fileChooser = fileChooser;
        }

        _createClass(HomePage, [{
          key: "openCamera",
          value: function openCamera() {
            var _this2 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/jpeg;base64,' + imageData;
              alert(base64Image);

              _this2.api.saveFile(base64Image).then(function (res) {
                return alert('Boa');
              })["catch"](function (error) {
                return alert(error.message);
              });
            }, function (err) {
              alert(err);
            });
          }
        }, {
          key: "chooseFile",
          value: function chooseFile() {
            var _this3 = this;

            this.fileChooser.open().then(function (uri) {
              alert(uri);

              _this3.api.saveFile(uri).then(function (res) {
                return alert(res);
              })["catch"](function (error) {
                return alert(error.message);
              });
            })["catch"](function (e) {
              return console.log(e);
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _api_externa_service__WEBPACK_IMPORTED_MODULE_2__["ApiExternaService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__["FileChooser"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map