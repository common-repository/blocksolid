/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************************!*\
  !*** ./src/block-pwd-adjustment-horizontal-spacings.js ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * External Dependencies
 */
 //npm install classnames --save

/**
 * WordPress Dependencies
 */
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  SelectControl = _wp$components.SelectControl,
  Button = _wp$components.Button,
  ButtonGroup = _wp$components.ButtonGroup;
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__;

//restrict to specific block names
var allowedBlocks = ['core/column'];
var paddingLeftControlOptions = [{
  caption: __('Default'),
  value: ''
}, {
  caption: __('S'),
  value: 'padding-left-small'
}, {
  caption: __('M'),
  value: 'padding-left-medium'
}, {
  caption: __('L'),
  value: 'padding-left-large'
}, {
  caption: __('None'),
  value: 'padding-left-none'
}];
var paddingRightControlOptions = [{
  caption: __('Default'),
  value: ''
}, {
  caption: __('S'),
  value: 'padding-right-small'
}, {
  caption: __('M'),
  value: 'padding-right-medium'
}, {
  caption: __('L'),
  value: 'padding-right-large'
}, {
  caption: __('None'),
  value: 'padding-right-none'
}];

/**
 * Add custom attributes for spacings.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  //add allowedBlocks restriction
  if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      paddingLeft: {
        type: 'text',
        "default": false
      },
      paddingRight: {
        type: 'text',
        "default": false
      }
    });
  }
  return settings;
}

/**
 * Add spacing controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */

var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      toggled = props.toggled;
    var paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), allowedBlocks.includes(name) && /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __('Horizontal Paddings'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement("strong", null, "Left"), " ", /*#__PURE__*/React.createElement(ButtonGroup, null, paddingLeftControlOptions.map(function (item) {
      return /*#__PURE__*/React.createElement(Button, {
        key: item.value,
        isPrimary: attributes.paddingLeft == item.value,
        value: item.value,
        onClick: function onClick() {
          setAttributes({
            paddingLeft: item.value
          });
          toggled === item.value ? null : item.value;
        }
      }, item.caption);
    }))), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement("strong", null, "Right"), " ", /*#__PURE__*/React.createElement(ButtonGroup, null, paddingRightControlOptions.map(function (item) {
      return /*#__PURE__*/React.createElement(Button, {
        key: item.value,
        isPrimary: attributes.paddingRight == item.value,
        value: item.value,
        onClick: function onClick() {
          setAttributes({
            paddingRight: item.value
          });
          toggled === item.value ? null : item.value;
        }
      }, item.caption);
    }))))));
  };
}, 'withAdvancedControls');

/* Apply the spacings in the editor too */ // https://wordpress.stackexchange.com/questions/324091/
var withSpacingClasses = createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.attributes.paddingLeft || props.attributes.paddingRight) {
      var spacingClasses = "";
      if (props.attributes.paddingLeft) {
        spacingClasses = spacingClasses + props.attributes.paddingLeft + ' ';
      }
      if (props.attributes.paddingRight) {
        spacingClasses = spacingClasses + props.attributes.paddingRight + ' ';
      }
      if (spacingClasses) {
        spacingClasses = spacingClasses.substring(0, spacingClasses.length - 1);

        //return <BlockListBlock { ...props } className={ "" + spacingClasses } />;
        return /*#__PURE__*/React.createElement(BlockListBlock, _extends({}, props, {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(props.className, spacingClasses)
        }));
      } else {
        return /*#__PURE__*/React.createElement(BlockListBlock, props);
      }
    } else {
      return /*#__PURE__*/React.createElement(BlockListBlock, props);
    }
  };
}, 'withClientIdClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'pwd-blocks/with-client-id-class-name', withSpacingClasses);

///

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */

function applyExtraClass(extraProps, blockType, attributes) {
  var paddingLeft = attributes.paddingLeft,
    paddingRight = attributes.paddingRight;

  /* check if attribute exists for old Gutenberg version compatibility*/
  /* add allowedBlocks restriction */
  if (typeof paddingLeft !== 'undefined' && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, paddingLeft);
  }
  if (typeof paddingRight !== 'undefined' && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, paddingRight);
  }
  return extraProps;
}

//add filters

addFilter('blocks.registerBlockType', 'pwd-blocks/custom-attributes', addAttributes);
addFilter('editor.BlockEdit', 'pwd-blocks/custom-advanced-control', withAdvancedControls);
addFilter('blocks.getSaveContent.extraProps', 'pwd-blocks/applyExtraClass', applyExtraClass);
})();

/******/ })()
;
//# sourceMappingURL=block-pwd-adjustment-horizontal-spacings.js.map