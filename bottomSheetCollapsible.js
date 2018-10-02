/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4
 */
(function( window, angular, undefined ){
"use strict";

/**
 * @ngdoc module
 * @name material.components.bottomSheetCollapsible
 * @description
 * BottomSheetCollapsible
 */
angular
  .module('material.components.bottomSheetCollapsible', [
    'material.core',
    'material.components.backdrop'
  ])
  .directive('mdBottomSheetCollapsible', MdBottomSheetCollapsibleDirective)
  .provider('$mdBottomSheetCollapsible', MdBottomSheetCollapsibleProvider);

/* ngInject */
function MdBottomSheetCollapsibleDirective($mdBottomSheetCollapsible) {
  return {
    restrict: 'E',
    link : function postLink(scope, element) {
      element.addClass('_md');     // private md component indicator for styling

      // When navigation force destroys an interimElement, then
      // listen and $destroy() that interim instance...
      scope.$on('$destroy', function() {
        $mdBottomSheetCollapsible.destroy();
      });
    }
  };
}
MdBottomSheetCollapsibleDirective.$inject = ["$mdBottomSheetCollapsible"];


/**
 * @ngdoc service
 * @name $mdBottomSheetCollapsible
 * @module material.components.bottomSheetCollapsible
 *
 * @description
 * `$mdBottomSheetCollapsible` opens a collapsible bottom sheet over the app and provides a simple promise API.
 *
 * ## Restrictions
 *
 * - The collapsible bottom sheet's template must have an outer `<md-bottom-sheet-collapsible>` element.
 * - Add the `md-grid` class to the collapsible bottom sheet for a grid layout.
 * - Add the `md-list` class to the collapsible bottom sheet for a list layout.
 *
 * @usage
 * <hljs lang="html">
 * <div ng-controller="MyController">
 *   <md-button ng-click="openBottomSheetCollapsible()">
 *     Open a Collapsible Bottom Sheet!
 *   </md-button>
 * </div>
 * </hljs>
 * <hljs lang="js">
 * let app = angular.module('app', ['ngMaterial']);
 * app.controller('MyController', function($scope, $mdBottomSheetCollapsible) {
 *   $scope.openBottomSheetCollapsible = function() {
 *     $mdBottomSheetCollapsible.show({
 *       template: '<md-bottom-sheet-collapsible>Hello!</md-bottom-sheet-collapsible>'
 *     });
 *   };
 * });
 * </hljs>
 */

 /**
 * @ngdoc method
 * @name $mdBottomSheetCollapsible#show
 *
 * @description
 * Show a collapsible bottom sheet with the specified options.
 *
 * @param {object} options An options object, with the following properties:
 *
 *   - `templateUrl` - `{string=}`: The url of an html template file that will
 *   be used as the content of the collapsible bottom sheet. Restrictions: the template must
 *   have an outer `md-bottom-sheet-collapsible` element.
 *   - `template` - `{string=}`: Same as templateUrl, except this is an actual
 *   template string.
 *   - `scope` - `{object=}`: the scope to link the template / controller to. If none is specified, it will create a new child scope.
 *     This scope will be destroyed when the collapsible bottom sheet is removed unless `preserveScope` is set to true.
 *   - `preserveScope` - `{boolean=}`: whether to preserve the scope when the element is removed. Default is false
 *   - `controller` - `{string=}`: The controller to associate with this collapsible bottom sheet.
 *   - `locals` - `{string=}`: An object containing key/value pairs. The keys will
 *   be used as names of values to inject into the controller. For example,
 *   `locals: {three: 3}` would inject `three` into the controller with the value
 *   of 3.
 *   - `clickOutsideToClose` - `{boolean=}`: Whether the user can click outside the collapsible bottom sheet to
 *     close it. Default true.
 *   - `disableBackdrop` - `{boolean=}`: When set to true, the collapsible bottom sheet will not show a backdrop.
 *   - `escapeToClose` - `{boolean=}`: Whether the user can press escape to close the collapsible bottom sheet.
 *     Default true.
 *   - `resolve` - `{object=}`: Similar to locals, except it takes promises as values
 *   and the collapsible bottom sheet will not open until the promises resolve.
 *   - `controllerAs` - `{string=}`: An alias to assign the controller to on the scope.
 *   - `parent` - `{element=}`: The element to append the collapsible bottom sheet to. The `parent` may be a `function`, `string`,
 *   `object`, or null. Defaults to appending to the body of the root element (or the root element) of the application.
 *   e.g. angular.element(document.getElementById('content')) or "#content"
 *   - `disableParentScroll` - `{boolean=}`: Whether to disable scrolling while the collapsible bottom sheet is open.
 *     Default true.
 *
 * @returns {promise} A promise that can be resolved with `$mdBottomSheetCollapsible.hide()` or
 * rejected with `$mdBottomSheetCollapsible.cancel()`.
 */

/**
 * @ngdoc method
 * @name $mdBottomSheetCollapsible#hide
 *
 * @description
 * Hide the existing collapsible bottom sheet and resolve the promise returned from
 * `$mdBottomSheetCollapsible.show()`. This call will close the most recently opened/current collapsible bottom sheet (if any).
 *
 * @param {*=} response An argument for the resolved promise.
 *
 */

/**
 * @ngdoc method
 * @name $mdBottomSheetCollapsible#cancel
 *
 * @description
 * Hide the existing collapsible bottom sheet and reject the promise returned from
 * `$mdBottomSheetCollapsible.show()`.
 *
 * @param {*=} response An argument for the rejected promise.
 *
 */

function MdBottomSheetCollapsibleProvider($$interimElementProvider) {
  // how fast we need to flick down to close the sheet, pixels/ms
  const STATE_VELOCITY = 0.5;
  const PADDING = 0; // same as css
  // const PADDING = 88; // same as css

  bottomSheetCollapsibleDefaults.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheetCollapsible", "$rootElement", "$mdGesture"];
  return $$interimElementProvider('$mdBottomSheetCollapsible')
    .setDefaults({
      methods: ['disableParentScroll', 'escapeToClose', 'clickOutsideToClose'],
      options: bottomSheetCollapsibleDefaults
    });

  /* ngInject */
  function bottomSheetCollapsibleDefaults($animate, $mdConstant, $mdUtil, $mdTheming, $mdBottomSheetCollapsible, $rootElement, $mdGesture) {
    let backdrop;

    return {
      themable: true,
      onShow: onShow,
      onRemove: onRemove,
      disableBackdrop: false,
      escapeToClose: true,
      clickOutsideToClose: true,
      disableParentScroll: true,
    };


    function onShow(scope, element, options, controller) {

      element = $mdUtil.extractElementByName(element, 'md-bottom-sheet-collapsible');

      // prevent tab focus or click focus on the bottom-sheet-collapsible container
      element.attr('tabindex',"-1");

      if (!options.disableBackdrop) {
        // Add a backdrop that will close on click
        backdrop = $mdUtil.createBackdrop(scope, "_md-bottom-sheet-backdrop md-opaque");

        // Prevent mouse focus on backdrop; ONLY programatic focus allowed.
        // This allows clicks on backdrop to propogate to the $rootElement and
        // ESC key events to be detected properly.

        backdrop[0].tabIndex = -1;

        if (options.clickOutsideToClose) {
          backdrop.on('click', function() {
            $mdUtil.nextTick($mdBottomSheetCollapsible.cancel, true);
          });
        }

        $mdTheming.inherit(backdrop, options.parent);

        $animate.enter(backdrop, options.parent, null);
      }

      let bottomSheetCollapsible = new BottomSheetCollapsible(element, options.parent);

      if (options.onLoad) options.onLoad(bottomSheetCollapsible);

      $mdTheming.inherit(bottomSheetCollapsible.element, options.parent);

      if (options.disableParentScroll) {
        options.restoreScroll = $mdUtil.disableScrollAround(bottomSheetCollapsible.element, options.parent);
      }

      bottomSheetCollapsible.setHalfway();

      return $animate.enter(bottomSheetCollapsible.element, options.parent, backdrop)
        .then(function() {
          let focusable = $mdUtil.findFocusTarget(element) || angular.element(
            element[0].querySelector('button') ||
            element[0].querySelector('a') ||
            element[0].querySelector('[ng-click]')
          ) || backdrop;

          if (options.escapeToClose) {
            options.rootElementKeyupCallback = function(e) {
              if (e.keyCode === $mdConstant.KEY_CODE.ESCAPE) {
                $mdUtil.nextTick($mdBottomSheetCollapsible.cancel,true);
              }
            };

            $rootElement.on('keyup', options.rootElementKeyupCallback);
            focusable && focusable.focus();
          }


        });

    }

    function onRemove(scope, element, options) {

      let bottomSheetCollapsible = options.bottomSheetCollapsible;

      if (!options.disableBackdrop) $animate.leave(backdrop);
      return $animate.leave(bottomSheetCollapsible.element).then(function() {
        if (options.disableParentScroll) {
          options.restoreScroll();
          delete options.restoreScroll;
        }

        bottomSheetCollapsible.cleanup();
      });
    }

    /**
     * BottomSheetCollapsible class to apply bottom-sheet-collapsible behavior to an element
     */
    function BottomSheetCollapsible(element, parent) {
      let deregisterDrag = $mdGesture.register(parent, 'drag', { horizontal: false });
      const transitionDuration = 500;
      let LHeight = window.innerHeight;
      let MHeight = window.innerHeight * .6;
      let SHeight = 56; // or toolbar height
      const peekHeight = 100;
      const minOffset = 400;
      let dragging = false;
      let state = "halfway";

      parent.on('$md.dragstart', onDragStart)
        .on('$md.drag', onDrag)
        .on('$md.dragend', onDragEnd);

      return {
        element: element,
        cleanup: function cleanup() {
          deregisterDrag();
          parent.off('$md.dragstart', onDragStart);
          parent.off('$md.drag', onDrag);
          parent.off('$md.dragend', onDragEnd);
        },
        setExpanded: setExpanded,
        setHalfway: setHalfway,
        setMinimized: setMinimized,
        getState: getState,
      };

      function composedPath (el) {
          let path = [];
          while (el) {
              path.push(el);
              if (el.tagName === 'HTML') {
                  path.push(document);
                  path.push(window);
                  return path;
             }
             el = el.parentElement;
          }
      }

      function getState() {
        return state;
      }

      function setExpanded() {
        element.css($mdConstant.CSS.TRANSITION_DURATION, '');
        element.css($mdConstant.CSS.TRANSFORM, '');
        element.removeClass("minimized halfway");
        element.addClass("expanded");
        state = "expanded";
      }

      function setHalfway() {
        element.css($mdConstant.CSS.TRANSITION_DURATION, transitionDuration + 'ms');
        element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + window.innerHeight - MHeight) + 'px,0)');
        element.removeClass("minimized expanded");
        element.addClass("halfway");
        state = "halfway";
      }

      function setMinimized() {
        element.css($mdConstant.CSS.TRANSITION_DURATION, transitionDuration + 'ms');
        element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + window.innerHeight - SHeight) + 'px,0)');
        element.removeClass("expanded halfway");
        element.addClass("minimized");
        state = "minimized";
      }

      function onDragStart(ev) {
        // Disable transitions on transform so that it feels fast
        element.css($mdConstant.CSS.TRANSITION_DURATION, '0ms');

        dragging = false;
        // ev.path.forEach(function(el) {
        composedPath(ev.target).forEach(function(el) {
          if (el.tagName == "MD-BOTTOM-SHEET-COLLAPSIBLE") {
            dragging = true;
          }
        });
      }
      
      function onDrag(ev) {
        if (dragging) {
          let transform = ev.pointer.distanceY;
          if (transform > 0) {
          }

          if (state === "expanded") {
            var offset = transform > 0 ? transform : 0;
            element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + offset) + 'px,0)');
          } else if (state === "halfway") {
            // console.log(transform, MHeight - window.innerHeight);
            // var offset;
            // if (transform < MHeight - window.innerHeight) {
            //   offset = MHeight - window.innerHeight;
            // } else {
            //   offset = transform;
            // }
            var offset = transform > MHeight - window.innerHeight ? transform : MHeight - window.innerHeight;
            element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + offset + window.innerHeight - MHeight) + 'px,0)');
          } else {
            // var offset;
            // if (transform < SHeight - window.innerHeight) {
            //   offset = SHeight - window.innerHeight;
            // } else {
            //   offset = transform;
            // }
            var offset = transform > SHeight - window.innerHeight ? transform : SHeight - window.innerHeight;
            element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + offset + window.innerHeight - SHeight) + 'px,0)');
          }
        }
      }

      function onDragEnd(ev) {
        if (dragging) {
          onDrag(ev);

          // console.log(ev.pointer.velocityY);
          if (state === "expanded") {
            if ((ev.pointer.distanceY > 20 && ev.pointer.distanceY < (LHeight - MHeight) && ev.pointer.velocityY > 0) || (ev.pointer.distanceY > 0 && ev.pointer.distanceY < (LHeight - MHeight) && ev.pointer.velocityY > STATE_VELOCITY)) {
              setHalfway();
            } else if (ev.pointer.distanceY > (20 + LHeight - MHeight) || (ev.pointer.distanceY > (LHeight - MHeight) && ev.pointer.velocityY > STATE_VELOCITY)) {
              if (ev.pointer.velocityY > 0) {
                setMinimized();
              } else if (ev.pointer.velocityY < 0) {
                setHalfway();
              }
            } else {
              setExpanded();
            }
          } else if (state === "halfway") {
            if (ev.pointer.distanceY > 0 && (ev.pointer.distanceY > 20 || ev.pointer.velocityY > STATE_VELOCITY)) {
              if (ev.pointer.velocityY > 0) {
                setMinimized();
              }
            } else if (ev.pointer.distanceY < 0 && (ev.pointer.distanceY < -20 || ev.pointer.velocityY < STATE_VELOCITY * -1)) {
              if (ev.pointer.velocityY < 0) {
                setExpanded();
              }
            } else {
              setHalfway()
            }
          } else if (state === "minimized") {
            if ((ev.pointer.distanceY < -20 && ev.pointer.distanceY > (SHeight - MHeight) && ev.pointer.velocityY < 0) || (ev.pointer.distanceY < 0 && ev.pointer.distanceY > (SHeight - MHeight) && ev.pointer.velocityY < STATE_VELOCITY * -1)) {
              setHalfway();
            } else if (ev.pointer.distanceY < (SHeight - MHeight - 20) || (ev.pointer.distanceY < (SHeight - MHeight) && ev.pointer.velocityY < STATE_VELOCITY * -1)) {
              if (ev.pointer.velocityY < 0) {
                setExpanded();
              } else if (ev.pointer.velocityY > 0) {
                setHalfway();
              }
            } else {
              setMinimized();
            }
          }
          /////
          // if (ev.pointer.distanceY > 0 &&
          //     (ev.pointer.distanceY > 20 || Math.abs(ev.pointer.velocityY) > CLOSING_VELOCITY)) {

          //   if (state === "expanded") {
          //     // let transitionDuration = 500;
          //     element.css($mdConstant.CSS.TRANSITION_DURATION, transitionDuration + 'ms');
          //     element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + window.innerHeight*.7) + 'px,0)');
          //     // element.css($mdConstant.CSS.TRANSITION_DURATION, '');
          //     // element.css($mdConstant.CSS.TRANSFORM, '');
          //     state = "halfway"
          //   } else if (state === "halfway") {
          //     // let transitionDuration = 500;
          //     element.css($mdConstant.CSS.TRANSITION_DURATION, transitionDuration + 'ms');
          //     element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + window.innerHeight - 56) + 'px,0)');
          //     // $mdUtil.nextTick($mdBottomSheetCollapsible.cancel, true);
          //     state = "minimized"
          //   }
          // } else if (ev.pointer.distanceY < 0) {
          //   if (state === "minimized") {

          //   } else if (state === "halfway") {
          //     // let transitionDuration = 500;
          //     element.css($mdConstant.CSS.TRANSITION_DURATION, transitionDuration + 'ms');
          //     element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING - minOffset) + 'px,0)');
          //     state = "expanded";
          //   }
          // } else {
          //   element.css($mdConstant.CSS.TRANSITION_DURATION, '');
          //   element.css($mdConstant.CSS.TRANSFORM, '');
          //   state = "halfway"
          // }
          /////
        }
      }
    }

  }

}
MdBottomSheetCollapsibleProvider.$inject = ["$$interimElementProvider"];

})(window, window.angular);
