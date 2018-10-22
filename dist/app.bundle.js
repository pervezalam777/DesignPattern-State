/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_order_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order/order-context */ "./src/order/order-context.ts");
/* harmony import */ var _order_order_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order/order-action */ "./src/order/order-action.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);

    _defineProperty(this, "orderDOne", void 0);

    _defineProperty(this, "orderDTwo", void 0);

    _defineProperty(this, "orderOne", null);

    _defineProperty(this, "orderTwo", null);

    this.orderDOne = {
      no: 234,
      cancellation_cost: 0,
      discount: 0,
      gst: 8,
      item_cost: 300,
      item_id: "001",
      item_weigh: 2,
      paid: false,
      pay_amount: 380,
      shipping_charges: 50,
      status: "",
      user_id: "001"
    };
    this.orderDTwo = Object.assign({}, this.orderDOne);
    this.orderDTwo.item_id = "001";
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      this.orderOne = new _order_order_context__WEBPACK_IMPORTED_MODULE_0__["OrderContext"](this.orderDOne);
      this.orderTwo = new _order_order_context__WEBPACK_IMPORTED_MODULE_0__["OrderContext"](this.orderDTwo);
      console.log("first order -------------------");
      this.requestForApproval(this.orderOne);
      this.requestForShipped(this.orderOne);
      this.requestForComplete(this.orderOne);
      this.requestForCancel(this.orderOne);
      console.log("second order -------------------");
      this.requestForPending(this.orderTwo);
      this.requestForApproval(this.orderTwo);
      this.requestForShipped(this.orderTwo);
      this.requestForCancel(this.orderTwo);
    }
  }, {
    key: "requestForApproval",
    value: function requestForApproval(order) {
      console.log("Before: Aproval --");
      console.log(order.getOrderDetails());
      var action = {
        type: _order_order_action__WEBPACK_IMPORTED_MODULE_1__["ACTION_REQUEST_FOR"].APPROVAL
      };
      order.requestStateChange(action);
      console.log("After: Aproval --");
      console.log(order.getOrderDetails());
    }
  }, {
    key: "requestForPending",
    value: function requestForPending(order) {
      console.log("Before: Pending --");
      console.log(order.getOrderDetails());
      var action = {
        type: _order_order_action__WEBPACK_IMPORTED_MODULE_1__["ACTION_REQUEST_FOR"].PENDING
      };
      order.requestStateChange(action);
      console.log("After: Pending --");
      console.log(order.getOrderDetails());
    }
  }, {
    key: "requestForCancel",
    value: function requestForCancel(order) {
      console.log("Before: Cancel --");
      console.log(order.getOrderDetails());
      var action = {
        type: _order_order_action__WEBPACK_IMPORTED_MODULE_1__["ACTION_REQUEST_FOR"].CANCEL
      };
      order.requestStateChange(action);
      console.log("After: Cancel --");
      console.log(order.getOrderDetails());
    }
  }, {
    key: "requestForShipped",
    value: function requestForShipped(order) {
      console.log("Before: Shipped --");
      console.log(order.getOrderDetails());
      var action = {
        type: _order_order_action__WEBPACK_IMPORTED_MODULE_1__["ACTION_REQUEST_FOR"].SHIPPED
      };
      order.requestStateChange(action);
      console.log("After: Shipped --");
      console.log(order.getOrderDetails());
    }
  }, {
    key: "requestForComplete",
    value: function requestForComplete(order) {
      console.log("Before: Complete --");
      console.log(order.getOrderDetails());
      var action = {
        type: _order_order_action__WEBPACK_IMPORTED_MODULE_1__["ACTION_REQUEST_FOR"].COMPLETE
      };
      order.requestStateChange(action);
      console.log("After: Complete --");
      console.log(order.getOrderDetails());
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ }),

/***/ "./src/order/a-order-state.ts":
/*!************************************!*\
  !*** ./src/order/a-order-state.ts ***!
  \************************************/
/*! exports provided: OrderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
/* harmony import */ var _order_cancel_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-cancel-state */ "./src/order/order-cancel-state.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var OrderState =
/*#__PURE__*/
function () {
  function OrderState(context) {
    _classCallCheck(this, OrderState);

    _defineProperty(this, "context", void 0);

    this.context = context;
  }

  _createClass(OrderState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      throw new Error("Method should be overriden by drive class");
    }
  }, {
    key: "cancelOrder",
    value: function cancelOrder(orderDetails) {
      //there is a issue with circular referencing
      // So cancel state does not inherits orderstate
      this.context.changeOrderState(new _order_cancel_state__WEBPACK_IMPORTED_MODULE_0__["OrderCancelState"](this.context));
    }
  }, {
    key: "possibleStateTransition",
    value: function possibleStateTransition() {
      return [];
    }
  }, {
    key: "getState",
    value: function getState() {
      return "improper state";
    }
  }]);

  return OrderState;
}();

/***/ }),

/***/ "./src/order/order-action.ts":
/*!***********************************!*\
  !*** ./src/order/order-action.ts ***!
  \***********************************/
/*! exports provided: ACTION_REQUEST_FOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_REQUEST_FOR", function() { return ACTION_REQUEST_FOR; });
var ACTION_REQUEST_FOR = {
  APPROVAL: "approval",
  CANCEL: "cancel",
  PENDING: "pending",
  HOLD: "hold",
  COMPLETE: "complete",
  SHIPPED: "shipped"
};

/***/ }),

/***/ "./src/order/order-approve-state.ts":
/*!******************************************!*\
  !*** ./src/order/order-approve-state.ts ***!
  \******************************************/
/*! exports provided: OrderApproveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderApproveState", function() { return OrderApproveState; });
/* harmony import */ var _a_order_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-order-state */ "./src/order/a-order-state.ts");
/* harmony import */ var _order_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-context */ "./src/order/order-context.ts");
/* harmony import */ var _order_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-action */ "./src/order/order-action.ts");
/* harmony import */ var _order_pending_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-pending-state */ "./src/order/order-pending-state.ts");
/* harmony import */ var _order_shipped_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-shipped-state */ "./src/order/order-shipped-state.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var OrderApproveState =
/*#__PURE__*/
function (_OrderState) {
  _inherits(OrderApproveState, _OrderState);

  function OrderApproveState(context) {
    _classCallCheck(this, OrderApproveState);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderApproveState).call(this, context));
  }

  _createClass(OrderApproveState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_2__["ACTION_REQUEST_FOR"].PENDING) {
        this.context.changeOrderState(new _order_pending_state__WEBPACK_IMPORTED_MODULE_3__["OrderPendingState"](this.context));
      } else if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_2__["ACTION_REQUEST_FOR"].SHIPPED) {
        //TODO: Assess if item is reached to warehouse
        // only then it can be shipped.
        this.context.changeOrderState(new _order_shipped_state__WEBPACK_IMPORTED_MODULE_4__["OrderShippedState"](this.context));
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      return _order_context__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATE"].APPROVED;
    }
  }]);

  return OrderApproveState;
}(_a_order_state__WEBPACK_IMPORTED_MODULE_0__["OrderState"]);

/***/ }),

/***/ "./src/order/order-cancel-state.ts":
/*!*****************************************!*\
  !*** ./src/order/order-cancel-state.ts ***!
  \*****************************************/
/*! exports provided: OrderCancelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCancelState", function() { return OrderCancelState; });
/* harmony import */ var _order_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-context */ "./src/order/order-context.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//const OrderState = require("./order-state")

var OrderCancelState =
/*#__PURE__*/
function () {
  function OrderCancelState(context) {
    _classCallCheck(this, OrderCancelState);

    _defineProperty(this, "context", void 0);

    this.context = context;
  }

  _createClass(OrderCancelState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      // do nothing
      throw new Error("this order is cancelled please place new order.");
    }
  }, {
    key: "cancelOrder",
    value: function cancelOrder(orderDetails) {
      // Do nothing;
      throw new Error("can not cancel order which is already canceled");
    }
  }, {
    key: "getState",
    value: function getState() {
      return _order_context__WEBPACK_IMPORTED_MODULE_0__["ORDER_STATE"].CANCELED;
    }
  }]);

  return OrderCancelState;
}();

/***/ }),

/***/ "./src/order/order-complete-state.ts":
/*!*******************************************!*\
  !*** ./src/order/order-complete-state.ts ***!
  \*******************************************/
/*! exports provided: OrderCompleteState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompleteState", function() { return OrderCompleteState; });
/* harmony import */ var _a_order_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-order-state */ "./src/order/a-order-state.ts");
/* harmony import */ var _order_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-context */ "./src/order/order-context.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OrderCompleteState =
/*#__PURE__*/
function (_OrderState) {
  _inherits(OrderCompleteState, _OrderState);

  function OrderCompleteState(context) {
    _classCallCheck(this, OrderCompleteState);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderCompleteState).call(this, context));
  }

  _createClass(OrderCompleteState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      // do nothing for now
      console.log("No more transition allowed for now");
    }
  }, {
    key: "cancelOrder",
    value: function cancelOrder(orderDetails) {
      console.log("can not cancel once delivered.... ");
    }
  }, {
    key: "getState",
    value: function getState() {
      return _order_context__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATE"].COMPLETED;
    }
  }]);

  return OrderCompleteState;
}(_a_order_state__WEBPACK_IMPORTED_MODULE_0__["OrderState"]);

/***/ }),

/***/ "./src/order/order-context.ts":
/*!************************************!*\
  !*** ./src/order/order-context.ts ***!
  \************************************/
/*! exports provided: ORDER_STATE, OrderContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATE", function() { return ORDER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderContext", function() { return OrderContext; });
/* harmony import */ var _order_new_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-new-state */ "./src/order/order-new-state.ts");
/* harmony import */ var _order_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-action */ "./src/order/order-action.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ORDER_STATE = {
  NEW: "new",
  APPROVED: "approved",
  PACKED: "packed",
  PENDING: "pending",
  HOLD: "holding",
  SHIPPED: "shipped",
  COMPLETED: "completed",
  CANCELED: "canceled"
};
var OrderContext =
/*#__PURE__*/
function () {
  function OrderContext(order) {
    _classCallCheck(this, OrderContext);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "orderDetails", void 0);

    this.orderDetails = order;
    this.orderDetails.status = ORDER_STATE.NEW;
    this.state = new _order_new_state__WEBPACK_IMPORTED_MODULE_0__["OrderNewState"](this);
  }

  _createClass(OrderContext, [{
    key: "changeOrderState",
    value: function changeOrderState(state) {
      this.state = state;
      this.orderDetails.status = this.state.getState(); // dispatch event to outer system that state has changed
    }
  }, {
    key: "requestStateChange",
    value: function requestStateChange(action) {
      if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_1__["ACTION_REQUEST_FOR"].CANCEL) {
        this.state.cancelOrder(this.orderDetails);
      } else {
        action.data = this.orderDetails;
        this.state.accessForStateTransition(action);
      }
    } //Actual order should not be modified by outsiders

  }, {
    key: "getOrderDetails",
    value: function getOrderDetails() {
      return Object.assign({}, this.orderDetails);
    }
  }]);

  return OrderContext;
}();

/***/ }),

/***/ "./src/order/order-new-state.ts":
/*!**************************************!*\
  !*** ./src/order/order-new-state.ts ***!
  \**************************************/
/*! exports provided: OrderNewState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderNewState", function() { return OrderNewState; });
/* harmony import */ var _a_order_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-order-state */ "./src/order/a-order-state.ts");
/* harmony import */ var _order_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-context */ "./src/order/order-context.ts");
/* harmony import */ var _order_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-action */ "./src/order/order-action.ts");
/* harmony import */ var _order_approve_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-approve-state */ "./src/order/order-approve-state.ts");
/* harmony import */ var _order_pending_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-pending-state */ "./src/order/order-pending-state.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var OrderNewState =
/*#__PURE__*/
function (_OrderState) {
  _inherits(OrderNewState, _OrderState);

  function OrderNewState(context) {
    _classCallCheck(this, OrderNewState);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderNewState).call(this, context));
  }

  _createClass(OrderNewState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_2__["ACTION_REQUEST_FOR"].APPROVAL) {
        this.processForApproval(action);
      } else if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_2__["ACTION_REQUEST_FOR"].PENDING) {
        this.processForPending(action);
      }
    }
  }, {
    key: "processForApproval",
    value: function processForApproval(action) {
      //TODO: Write logic to check if order can be approve
      // on the bases of user previous record
      var details = action.data;

      if (details.user_id !== null) {
        this.context.changeOrderState(new _order_approve_state__WEBPACK_IMPORTED_MODULE_3__["OrderApproveState"](this.context));
      } else {
        this.cancelOrder(details);
      }
    }
  }, {
    key: "processForPending",
    value: function processForPending(action) {
      this.context.changeOrderState(new _order_pending_state__WEBPACK_IMPORTED_MODULE_4__["OrderPendingState"](this.context));
    }
  }, {
    key: "getState",
    value: function getState() {
      return _order_context__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATE"].NEW;
    }
  }]);

  return OrderNewState;
}(_a_order_state__WEBPACK_IMPORTED_MODULE_0__["OrderState"]);

/***/ }),

/***/ "./src/order/order-pending-state.ts":
/*!******************************************!*\
  !*** ./src/order/order-pending-state.ts ***!
  \******************************************/
/*! exports provided: OrderPendingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPendingState", function() { return OrderPendingState; });
/* harmony import */ var _a_order_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-order-state */ "./src/order/a-order-state.ts");
/* harmony import */ var _order_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-context */ "./src/order/order-context.ts");
/* harmony import */ var _order_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-action */ "./src/order/order-action.ts");
/* harmony import */ var _order_shipped_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-shipped-state */ "./src/order/order-shipped-state.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var OrderPendingState =
/*#__PURE__*/
function (_OrderState) {
  _inherits(OrderPendingState, _OrderState);

  function OrderPendingState(context) {
    _classCallCheck(this, OrderPendingState);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderPendingState).call(this, context));
  }

  _createClass(OrderPendingState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      //TODO: Assess if item is reached to warehouse
      // only then it can be shipped.
      if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_2__["ACTION_REQUEST_FOR"].SHIPPED) {
        this.context.changeOrderState(new _order_shipped_state__WEBPACK_IMPORTED_MODULE_3__["OrderShippedState"](this.context));
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      return _order_context__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATE"].PENDING;
    }
  }]);

  return OrderPendingState;
}(_a_order_state__WEBPACK_IMPORTED_MODULE_0__["OrderState"]);

/***/ }),

/***/ "./src/order/order-shipped-state.ts":
/*!******************************************!*\
  !*** ./src/order/order-shipped-state.ts ***!
  \******************************************/
/*! exports provided: OrderShippedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderShippedState", function() { return OrderShippedState; });
/* harmony import */ var _a_order_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-order-state */ "./src/order/a-order-state.ts");
/* harmony import */ var _order_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-context */ "./src/order/order-context.ts");
/* harmony import */ var _order_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-action */ "./src/order/order-action.ts");
/* harmony import */ var _order_complete_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-complete-state */ "./src/order/order-complete-state.ts");
/* harmony import */ var _order_cancel_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-cancel-state */ "./src/order/order-cancel-state.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var OrderShippedState =
/*#__PURE__*/
function (_OrderState) {
  _inherits(OrderShippedState, _OrderState);

  function OrderShippedState(context) {
    _classCallCheck(this, OrderShippedState);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderShippedState).call(this, context));
  }

  _createClass(OrderShippedState, [{
    key: "accessForStateTransition",
    value: function accessForStateTransition(action) {
      if (action.type === _order_action__WEBPACK_IMPORTED_MODULE_2__["ACTION_REQUEST_FOR"].COMPLETE) {
        this.context.changeOrderState(new _order_complete_state__WEBPACK_IMPORTED_MODULE_3__["OrderCompleteState"](this.context));
      }
    } //If Item shipped and user initiate cancellation 
    // then it would require user to pay for cancellation

  }, {
    key: "cancelOrder",
    value: function cancelOrder(orderDetails) {
      this.cancellationCharges(orderDetails);
      this.context.changeOrderState(new _order_cancel_state__WEBPACK_IMPORTED_MODULE_4__["OrderCancelState"](this.context));
    }
  }, {
    key: "cancellationCharges",
    value: function cancellationCharges(orderDetails) {
      orderDetails.cancellation_cost = 5;

      if (orderDetails.item_cost > 500 && orderDetails.item_weigh > 4) {
        orderDetails.cancellation_cost = 15;
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      return _order_context__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATE"].SHIPPED;
    }
  }]);

  return OrderShippedState;
}(_a_order_state__WEBPACK_IMPORTED_MODULE_0__["OrderState"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9vcmRlci9hLW9yZGVyLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9vcmRlci9vcmRlci1hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yZGVyL29yZGVyLWFwcHJvdmUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yZGVyL29yZGVyLWNhbmNlbC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3JkZXIvb3JkZXItY29tcGxldGUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yZGVyL29yZGVyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yZGVyL29yZGVyLW5ldy1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3JkZXIvb3JkZXItcGVuZGluZy1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3JkZXIvb3JkZXItc2hpcHBlZC1zdGF0ZS50cyJdLCJuYW1lcyI6WyJCb290c3RyYXAiLCJvcmRlckRPbmUiLCJubyIsImNhbmNlbGxhdGlvbl9jb3N0IiwiZGlzY291bnQiLCJnc3QiLCJpdGVtX2Nvc3QiLCJpdGVtX2lkIiwiaXRlbV93ZWlnaCIsInBhaWQiLCJwYXlfYW1vdW50Iiwic2hpcHBpbmdfY2hhcmdlcyIsInN0YXR1cyIsInVzZXJfaWQiLCJvcmRlckRUd28iLCJPYmplY3QiLCJhc3NpZ24iLCJvcmRlck9uZSIsIk9yZGVyQ29udGV4dCIsIm9yZGVyVHdvIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RGb3JBcHByb3ZhbCIsInJlcXVlc3RGb3JTaGlwcGVkIiwicmVxdWVzdEZvckNvbXBsZXRlIiwicmVxdWVzdEZvckNhbmNlbCIsInJlcXVlc3RGb3JQZW5kaW5nIiwib3JkZXIiLCJnZXRPcmRlckRldGFpbHMiLCJhY3Rpb24iLCJ0eXBlIiwiQUNUSU9OX1JFUVVFU1RfRk9SIiwiQVBQUk9WQUwiLCJyZXF1ZXN0U3RhdGVDaGFuZ2UiLCJQRU5ESU5HIiwiQ0FOQ0VMIiwiU0hJUFBFRCIsIkNPTVBMRVRFIiwiYm9vdCIsImluaXRpYWxpemUiLCJPcmRlclN0YXRlIiwiY29udGV4dCIsIkVycm9yIiwib3JkZXJEZXRhaWxzIiwiY2hhbmdlT3JkZXJTdGF0ZSIsIk9yZGVyQ2FuY2VsU3RhdGUiLCJIT0xEIiwiT3JkZXJBcHByb3ZlU3RhdGUiLCJPcmRlclBlbmRpbmdTdGF0ZSIsIk9yZGVyU2hpcHBlZFN0YXRlIiwiT1JERVJfU1RBVEUiLCJBUFBST1ZFRCIsIkNBTkNFTEVEIiwiT3JkZXJDb21wbGV0ZVN0YXRlIiwiQ09NUExFVEVEIiwiTkVXIiwiUEFDS0VEIiwic3RhdGUiLCJPcmRlck5ld1N0YXRlIiwiZ2V0U3RhdGUiLCJjYW5jZWxPcmRlciIsImRhdGEiLCJhY2Nlc3NGb3JTdGF0ZVRyYW5zaXRpb24iLCJwcm9jZXNzRm9yQXBwcm92YWwiLCJwcm9jZXNzRm9yUGVuZGluZyIsImRldGFpbHMiLCJjYW5jZWxsYXRpb25DaGFyZ2VzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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LENBQXFCLEtBQUtKLE9BQTFCLENBREo7QUFFSDtBQWxCTDtBQUFBO0FBQUEsd0NBb0JnQ0UsWUFwQmhDLEVBb0IyRDtBQUNuREEsa0JBQVksQ0FBQ3hDLGlCQUFiLEdBQWlDLENBQWpDOztBQUNBLFVBQUd3QyxZQUFZLENBQUNyQyxTQUFiLEdBQXlCLEdBQXpCLElBQWdDcUMsWUFBWSxDQUFDbkMsVUFBYixHQUEwQixDQUE3RCxFQUErRDtBQUMzRG1DLG9CQUFZLENBQUN4QyxpQkFBYixHQUFpQyxFQUFqQztBQUNIO0FBQ0o7QUF6Qkw7QUFBQTtBQUFBLCtCQTJCc0I7QUFDZCxhQUFPK0MsMERBQVcsQ0FBQ2QsT0FBbkI7QUFDSDtBQTdCTDs7QUFBQTtBQUFBLEVBQXVDSSx5REFBdkMsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcbmltcG9ydCB7IElPcmRlckRldGFpbHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2ktb3JkZXItZGV0YWlsc1wiO1xuaW1wb3J0IHsgSU9yZGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLW9yZGVyLWNvbnRleHRcIjtcbmltcG9ydCB7IE9yZGVyQ29udGV4dCwgT1JERVJfU1RBVEUgfSBmcm9tIFwiLi9vcmRlci9vcmRlci1jb250ZXh0XCI7XG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLWFjdGlvblwiO1xuaW1wb3J0IHsgQUNUSU9OX1JFUVVFU1RfRk9SIH0gZnJvbSBcIi4vb3JkZXIvb3JkZXItYWN0aW9uXCI7XG5pbXBvcnQge09yZGVyU3RhdGV9IGZyb20gXCIuL29yZGVyL2Etb3JkZXItc3RhdGVcIlxuXG5jbGFzcyBCb290c3RyYXAge1xuICAgIHByaXZhdGUgb3JkZXJET25lOklPcmRlckRldGFpbHM7XG4gICAgcHJpdmF0ZSBvcmRlckRUd286SU9yZGVyRGV0YWlscztcbiAgICBwcml2YXRlIG9yZGVyT25lOklPcmRlciB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgb3JkZXJUd286SU9yZGVyIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5vcmRlckRPbmUgPSB7XG4gICAgICAgICAgICBubzoyMzQsXG4gICAgICAgICAgICBjYW5jZWxsYXRpb25fY29zdDowLFxuICAgICAgICAgICAgZGlzY291bnQ6MCxcbiAgICAgICAgICAgIGdzdDo4LFxuICAgICAgICAgICAgaXRlbV9jb3N0OjMwMCxcbiAgICAgICAgICAgIGl0ZW1faWQ6XCIwMDFcIixcbiAgICAgICAgICAgIGl0ZW1fd2VpZ2g6MixcbiAgICAgICAgICAgIHBhaWQ6ZmFsc2UsXG4gICAgICAgICAgICBwYXlfYW1vdW50OiAzODAsXG4gICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzOjUwLFxuICAgICAgICAgICAgc3RhdHVzOlwiXCIsXG4gICAgICAgICAgICB1c2VyX2lkOlwiMDAxXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9yZGVyRFR3byA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3JkZXJET25lKTtcbiAgICAgICAgdGhpcy5vcmRlckRUd28uaXRlbV9pZCA9IFwiMDAxXCI7XG5cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCl7XG4gICAgICAgIHRoaXMub3JkZXJPbmUgPSBuZXcgT3JkZXJDb250ZXh0KHRoaXMub3JkZXJET25lKTtcbiAgICAgICAgdGhpcy5vcmRlclR3byA9IG5ldyBPcmRlckNvbnRleHQodGhpcy5vcmRlckRUd28pO1xuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0IG9yZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIHRoaXMucmVxdWVzdEZvckFwcHJvdmFsKHRoaXMub3JkZXJPbmUpO1xuICAgICAgICB0aGlzLnJlcXVlc3RGb3JTaGlwcGVkKHRoaXMub3JkZXJPbmUpO1xuICAgICAgICB0aGlzLnJlcXVlc3RGb3JDb21wbGV0ZSh0aGlzLm9yZGVyT25lKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0Rm9yQ2FuY2VsKHRoaXMub3JkZXJPbmUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2Vjb25kIG9yZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIHRoaXMucmVxdWVzdEZvclBlbmRpbmcodGhpcy5vcmRlclR3byk7XG4gICAgICAgIHRoaXMucmVxdWVzdEZvckFwcHJvdmFsKHRoaXMub3JkZXJUd28pO1xuICAgICAgICB0aGlzLnJlcXVlc3RGb3JTaGlwcGVkKHRoaXMub3JkZXJUd28pO1xuICAgICAgICB0aGlzLnJlcXVlc3RGb3JDYW5jZWwodGhpcy5vcmRlclR3byk7XG5cbiAgICB9XG5cbiAgICByZXF1ZXN0Rm9yQXBwcm92YWwob3JkZXI6SU9yZGVyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJCZWZvcmU6IEFwcm92YWwgLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLmdldE9yZGVyRGV0YWlscygpKTtcblxuICAgICAgICBsZXQgYWN0aW9uOklBY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOkFDVElPTl9SRVFVRVNUX0ZPUi5BUFBST1ZBTFxuICAgICAgICB9XG4gICAgICAgIG9yZGVyLnJlcXVlc3RTdGF0ZUNoYW5nZShhY3Rpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXI6IEFwcm92YWwgLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLmdldE9yZGVyRGV0YWlscygpKVxuICAgIH1cblxuICAgIHJlcXVlc3RGb3JQZW5kaW5nKG9yZGVyOklPcmRlcil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmVmb3JlOiBQZW5kaW5nIC0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlci5nZXRPcmRlckRldGFpbHMoKSk7XG5cbiAgICAgICAgbGV0IGFjdGlvbjpJQWN0aW9uID0ge1xuICAgICAgICAgICAgdHlwZTpBQ1RJT05fUkVRVUVTVF9GT1IuUEVORElOR1xuICAgICAgICB9XG4gICAgICAgIG9yZGVyLnJlcXVlc3RTdGF0ZUNoYW5nZShhY3Rpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXI6IFBlbmRpbmcgLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLmdldE9yZGVyRGV0YWlscygpKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Rm9yQ2FuY2VsKG9yZGVyOklPcmRlcil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmVmb3JlOiBDYW5jZWwgLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLmdldE9yZGVyRGV0YWlscygpKTtcblxuICAgICAgICBsZXQgYWN0aW9uOklBY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOkFDVElPTl9SRVFVRVNUX0ZPUi5DQU5DRUxcbiAgICAgICAgfVxuICAgICAgICBvcmRlci5yZXF1ZXN0U3RhdGVDaGFuZ2UoYWN0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkFmdGVyOiBDYW5jZWwgLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLmdldE9yZGVyRGV0YWlscygpKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Rm9yU2hpcHBlZChvcmRlcjpJT3JkZXIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJlZm9yZTogU2hpcHBlZCAtLVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cob3JkZXIuZ2V0T3JkZXJEZXRhaWxzKCkpO1xuXG4gICAgICAgIGxldCBhY3Rpb246SUFjdGlvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6QUNUSU9OX1JFUVVFU1RfRk9SLlNISVBQRURcbiAgICAgICAgfVxuICAgICAgICBvcmRlci5yZXF1ZXN0U3RhdGVDaGFuZ2UoYWN0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkFmdGVyOiBTaGlwcGVkIC0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlci5nZXRPcmRlckRldGFpbHMoKSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEZvckNvbXBsZXRlKG9yZGVyOklPcmRlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJlZm9yZTogQ29tcGxldGUgLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyLmdldE9yZGVyRGV0YWlscygpKTtcblxuICAgICAgICBsZXQgYWN0aW9uOklBY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOkFDVElPTl9SRVFVRVNUX0ZPUi5DT01QTEVURVxuICAgICAgICB9XG4gICAgICAgIG9yZGVyLnJlcXVlc3RTdGF0ZUNoYW5nZShhY3Rpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXI6IENvbXBsZXRlIC0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlci5nZXRPcmRlckRldGFpbHMoKSk7XG4gICAgfVxufSAgIFxuXG5sZXQgYm9vdCA9IG5ldyBCb290c3RyYXAoKTtcbmJvb3QuaW5pdGlhbGl6ZSgpOyAgIiwiaW1wb3J0IHsgSU9yZGVyU3RhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLXN0YXRlXCI7XHJcbmltcG9ydCB7IElPcmRlckNvbnRleHQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktYWN0aW9uXCI7XHJcbmltcG9ydCB7IElPcmRlckRldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWRldGFpbHNcIjtcclxuaW1wb3J0IHsgT3JkZXJDYW5jZWxTdGF0ZSB9IGZyb20gXCIuL29yZGVyLWNhbmNlbC1zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyU3RhdGUgaW1wbGVtZW50cyBJT3JkZXJTdGF0ZSB7XHJcbiAgICBwcm90ZWN0ZWQgY29udGV4dDpJT3JkZXJDb250ZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6SU9yZGVyQ29udGV4dCl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBhY2Nlc3NGb3JTdGF0ZVRyYW5zaXRpb24oYWN0aW9uOklBY3Rpb24pOnZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGVuIGJ5IGRyaXZlIGNsYXNzXCIpXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsT3JkZXIob3JkZXJEZXRhaWxzOklPcmRlckRldGFpbHMpOnZvaWQge1xyXG4gICAgICAgIC8vdGhlcmUgaXMgYSBpc3N1ZSB3aXRoIGNpcmN1bGFyIHJlZmVyZW5jaW5nXHJcbiAgICAgICAgLy8gU28gY2FuY2VsIHN0YXRlIGRvZXMgbm90IGluaGVyaXRzIG9yZGVyc3RhdGVcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2hhbmdlT3JkZXJTdGF0ZShcclxuICAgICAgICAgICAgbmV3IE9yZGVyQ2FuY2VsU3RhdGUodGhpcy5jb250ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zc2libGVTdGF0ZVRyYW5zaXRpb24oKTpBcnJheTxzdHJpbmc+e1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW1wcm9wZXIgc3RhdGVcIlxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBBQ1RJT05fUkVRVUVTVF9GT1IgPSB7XHJcbiAgICBBUFBST1ZBTDpcImFwcHJvdmFsXCIsXHJcbiAgICBDQU5DRUw6XCJjYW5jZWxcIixcclxuICAgIFBFTkRJTkc6XCJwZW5kaW5nXCIsXHJcbiAgICBIT0xEOlwiaG9sZFwiLFxyXG4gICAgQ09NUExFVEU6XCJjb21wbGV0ZVwiLFxyXG4gICAgU0hJUFBFRDpcInNoaXBwZWRcIlxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBPcmRlclN0YXRlIH0gZnJvbSBcIi4vYS1vcmRlci1zdGF0ZVwiO1xyXG5pbXBvcnQgeyBJT3JkZXJDb250ZXh0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IE9SREVSX1NUQVRFIH0gZnJvbSBcIi4vb3JkZXItY29udGV4dFwiO1xyXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1hY3Rpb25cIjtcclxuaW1wb3J0IHsgQUNUSU9OX1JFUVVFU1RfRk9SIH0gZnJvbSBcIi4vb3JkZXItYWN0aW9uXCI7XHJcbmltcG9ydCB7IE9yZGVyUGVuZGluZ1N0YXRlIH0gZnJvbSBcIi4vb3JkZXItcGVuZGluZy1zdGF0ZVwiO1xyXG5pbXBvcnQgeyBPcmRlclNoaXBwZWRTdGF0ZSB9IGZyb20gXCIuL29yZGVyLXNoaXBwZWQtc3RhdGVcIjtcclxuaW1wb3J0IHsgSU9yZGVyU3RhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLXN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJBcHByb3ZlU3RhdGUgZXh0ZW5kcyBPcmRlclN0YXRlIGltcGxlbWVudHMgSU9yZGVyU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDpJT3JkZXJDb250ZXh0KXtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBhY2Nlc3NGb3JTdGF0ZVRyYW5zaXRpb24oYWN0aW9uOklBY3Rpb24pOnZvaWQge1xyXG4gICAgICAgIGlmKGFjdGlvbi50eXBlID09PSBBQ1RJT05fUkVRVUVTVF9GT1IuUEVORElORyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jaGFuZ2VPcmRlclN0YXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyUGVuZGluZ1N0YXRlKHRoaXMuY29udGV4dCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZihhY3Rpb24udHlwZSA9PT0gQUNUSU9OX1JFUVVFU1RfRk9SLlNISVBQRUQpe1xyXG4gICAgICAgICAgICAvL1RPRE86IEFzc2VzcyBpZiBpdGVtIGlzIHJlYWNoZWQgdG8gd2FyZWhvdXNlXHJcbiAgICAgICAgICAgIC8vIG9ubHkgdGhlbiBpdCBjYW4gYmUgc2hpcHBlZC5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNoYW5nZU9yZGVyU3RhdGUoXHJcbiAgICAgICAgICAgICAgICBuZXcgT3JkZXJTaGlwcGVkU3RhdGUodGhpcy5jb250ZXh0KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBPUkRFUl9TVEFURS5BUFBST1ZFRDtcclxuICAgIH1cclxuXHJcbn0iLCIvL2NvbnN0IE9yZGVyU3RhdGUgPSByZXF1aXJlKFwiLi9vcmRlci1zdGF0ZVwiKVxyXG5pbXBvcnQgeyBPcmRlclN0YXRlIH0gZnJvbSBcIi4vYS1vcmRlci1zdGF0ZVwiO1xyXG5pbXBvcnQgeyBJT3JkZXJDb250ZXh0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IE9SREVSX1NUQVRFIH0gZnJvbSBcIi4vb3JkZXItY29udGV4dFwiO1xyXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1hY3Rpb25cIjtcclxuaW1wb3J0IHsgSU9yZGVyRGV0YWlscyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktb3JkZXItZGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBJT3JkZXJTdGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktb3JkZXItc3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJDYW5jZWxTdGF0ZSBpbXBsZW1lbnRzIElPcmRlclN0YXRlIHtcclxuICAgIHByaXZhdGUgY29udGV4dDpJT3JkZXJDb250ZXh0XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OklPcmRlckNvbnRleHQpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXNzRm9yU3RhdGVUcmFuc2l0aW9uKGFjdGlvbjpJQWN0aW9uKTp2b2lkIHtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhpcyBvcmRlciBpcyBjYW5jZWxsZWQgcGxlYXNlIHBsYWNlIG5ldyBvcmRlci5cIilcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxPcmRlcihvcmRlckRldGFpbHM6SU9yZGVyRGV0YWlscyk6dm9pZCB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW4gbm90IGNhbmNlbCBvcmRlciB3aGljaCBpcyBhbHJlYWR5IGNhbmNlbGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBPUkRFUl9TVEFURS5DQU5DRUxFRFxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE9yZGVyU3RhdGUgfSBmcm9tIFwiLi9hLW9yZGVyLXN0YXRlXCI7XHJcbmltcG9ydCB7IElPcmRlckNvbnRleHQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgT1JERVJfU1RBVEUgfSBmcm9tIFwiLi9vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWFjdGlvblwiO1xyXG5pbXBvcnQgeyBJT3JkZXJEZXRhaWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1vcmRlci1kZXRhaWxzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyQ29tcGxldGVTdGF0ZSBleHRlbmRzIE9yZGVyU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDpJT3JkZXJDb250ZXh0KXtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBhY2Nlc3NGb3JTdGF0ZVRyYW5zaXRpb24oYWN0aW9uOklBY3Rpb24pOnZvaWQge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgZm9yIG5vd1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9yZSB0cmFuc2l0aW9uIGFsbG93ZWQgZm9yIG5vd1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxPcmRlcihvcmRlckRldGFpbHM6SU9yZGVyRGV0YWlscyk6dm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW4gbm90IGNhbmNlbCBvbmNlIGRlbGl2ZXJlZC4uLi4gXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBPUkRFUl9TVEFURS5DT01QTEVURUQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSU9yZGVyQ29udGV4dCwgSU9yZGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IE9yZGVyTmV3U3RhdGUgfSBmcm9tIFwiLi9vcmRlci1uZXctc3RhdGVcIjtcclxuaW1wb3J0IHsgSU9yZGVyU3RhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLXN0YXRlXCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWFjdGlvblwiO1xyXG5pbXBvcnQgeyBBQ1RJT05fUkVRVUVTVF9GT1IgfSBmcm9tIFwiLi9vcmRlci1hY3Rpb25cIjtcclxuaW1wb3J0IHsgSU9yZGVyRGV0YWlscyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktb3JkZXItZGV0YWlsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBPUkRFUl9TVEFURSA9IHtcclxuICAgIE5FVzpcIm5ld1wiLFxyXG4gICAgQVBQUk9WRUQ6XCJhcHByb3ZlZFwiLFxyXG4gICAgUEFDS0VEOlwicGFja2VkXCIsXHJcbiAgICBQRU5ESU5HOlwicGVuZGluZ1wiLFxyXG4gICAgSE9MRDpcImhvbGRpbmdcIixcclxuICAgIFNISVBQRUQ6XCJzaGlwcGVkXCIsXHJcbiAgICBDT01QTEVURUQ6XCJjb21wbGV0ZWRcIixcclxuICAgIENBTkNFTEVEOlwiY2FuY2VsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJDb250ZXh0IGltcGxlbWVudHMgSU9yZGVyQ29udGV4dCwgSU9yZGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGU6SU9yZGVyU3RhdGVcclxuICAgIHByaXZhdGUgb3JkZXJEZXRhaWxzOklPcmRlckRldGFpbHNcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Iob3JkZXI6SU9yZGVyRGV0YWlscyl7XHJcbiAgICAgICAgdGhpcy5vcmRlckRldGFpbHMgPSBvcmRlcjtcclxuICAgICAgICB0aGlzLm9yZGVyRGV0YWlscy5zdGF0dXMgPSBPUkRFUl9TVEFURS5ORVc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBPcmRlck5ld1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU9yZGVyU3RhdGUoc3RhdGU6SU9yZGVyU3RhdGUpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLm9yZGVyRGV0YWlscy5zdGF0dXMgPSB0aGlzLnN0YXRlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2ggZXZlbnQgdG8gb3V0ZXIgc3lzdGVtIHRoYXQgc3RhdGUgaGFzIGNoYW5nZWRcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0U3RhdGVDaGFuZ2UoYWN0aW9uOklBY3Rpb24pOnZvaWR7XHJcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBBQ1RJT05fUkVRVUVTVF9GT1IuQ0FOQ0VMKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW5jZWxPcmRlcih0aGlzLm9yZGVyRGV0YWlscyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uLmRhdGEgPSB0aGlzLm9yZGVyRGV0YWlscztcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2Nlc3NGb3JTdGF0ZVRyYW5zaXRpb24oYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9BY3R1YWwgb3JkZXIgc2hvdWxkIG5vdCBiZSBtb2RpZmllZCBieSBvdXRzaWRlcnNcclxuICAgIGdldE9yZGVyRGV0YWlscygpOklPcmRlckRldGFpbHMge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHRoaXMub3JkZXJEZXRhaWxzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE9yZGVyU3RhdGUgfSBmcm9tIFwiLi9hLW9yZGVyLXN0YXRlXCI7XHJcbmltcG9ydCB7IElPcmRlckNvbnRleHQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgT1JERVJfU1RBVEUgfSBmcm9tIFwiLi9vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWFjdGlvblwiO1xyXG5pbXBvcnQgeyBBQ1RJT05fUkVRVUVTVF9GT1IgfSBmcm9tIFwiLi9vcmRlci1hY3Rpb25cIjtcclxuaW1wb3J0IHsgT3JkZXJBcHByb3ZlU3RhdGUgfSBmcm9tIFwiLi9vcmRlci1hcHByb3ZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IElPcmRlckRldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWRldGFpbHNcIjtcclxuaW1wb3J0IHsgT3JkZXJQZW5kaW5nU3RhdGUgfSBmcm9tIFwiLi9vcmRlci1wZW5kaW5nLXN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJOZXdTdGF0ZSBleHRlbmRzIE9yZGVyU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDpJT3JkZXJDb250ZXh0KXtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBhY2Nlc3NGb3JTdGF0ZVRyYW5zaXRpb24oYWN0aW9uOklBY3Rpb24pOnZvaWQge1xyXG4gICAgICAgIGlmKGFjdGlvbi50eXBlID09PSBBQ1RJT05fUkVRVUVTVF9GT1IuQVBQUk9WQUwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRm9yQXBwcm92YWwoYWN0aW9uKSAgXHJcbiAgICAgICAgfSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSBBQ1RJT05fUkVRVUVTVF9GT1IuUEVORElORyl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZvclBlbmRpbmcoYWN0aW9uKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NGb3JBcHByb3ZhbChhY3Rpb246SUFjdGlvbil7XHJcbiAgICAgICAgLy9UT0RPOiBXcml0ZSBsb2dpYyB0byBjaGVjayBpZiBvcmRlciBjYW4gYmUgYXBwcm92ZVxyXG4gICAgICAgIC8vIG9uIHRoZSBiYXNlcyBvZiB1c2VyIHByZXZpb3VzIHJlY29yZFxyXG4gICAgICAgIC8vIGFuZCBhdXRoZW50aWNpdHlcclxuICAgICAgICBsZXQgZGV0YWlsczpJT3JkZXJEZXRhaWxzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgaWYoZGV0YWlscy51c2VyX2lkICE9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNoYW5nZU9yZGVyU3RhdGUoXHJcbiAgICAgICAgICAgICAgICBuZXcgT3JkZXJBcHByb3ZlU3RhdGUodGhpcy5jb250ZXh0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxPcmRlcihkZXRhaWxzKTtcclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NGb3JQZW5kaW5nKGFjdGlvbjpJQWN0aW9uKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2hhbmdlT3JkZXJTdGF0ZShcclxuICAgICAgICAgICAgbmV3IE9yZGVyUGVuZGluZ1N0YXRlKHRoaXMuY29udGV4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gT1JERVJfU1RBVEUuTkVXO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE9yZGVyU3RhdGUgfSBmcm9tIFwiLi9hLW9yZGVyLXN0YXRlXCI7XHJcbmltcG9ydCB7IElPcmRlckNvbnRleHQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgT1JERVJfU1RBVEUgfSBmcm9tIFwiLi9vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWFjdGlvblwiO1xyXG5pbXBvcnQgeyBBQ1RJT05fUkVRVUVTVF9GT1IgfSBmcm9tIFwiLi9vcmRlci1hY3Rpb25cIjtcclxuaW1wb3J0IHsgT3JkZXJTaGlwcGVkU3RhdGUgfSBmcm9tIFwiLi9vcmRlci1zaGlwcGVkLXN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJQZW5kaW5nU3RhdGUgZXh0ZW5kcyBPcmRlclN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6SU9yZGVyQ29udGV4dCl7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXNzRm9yU3RhdGVUcmFuc2l0aW9uKGFjdGlvbjpJQWN0aW9uKTp2b2lkIHtcclxuICAgICAgICAvL1RPRE86IEFzc2VzcyBpZiBpdGVtIGlzIHJlYWNoZWQgdG8gd2FyZWhvdXNlXHJcbiAgICAgICAgLy8gb25seSB0aGVuIGl0IGNhbiBiZSBzaGlwcGVkLlxyXG4gICAgICAgIGlmKGFjdGlvbi50eXBlID09PSBBQ1RJT05fUkVRVUVTVF9GT1IuU0hJUFBFRCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jaGFuZ2VPcmRlclN0YXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyU2hpcHBlZFN0YXRlKHRoaXMuY29udGV4dCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gT1JERVJfU1RBVEUuUEVORElORztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBPcmRlclN0YXRlIH0gZnJvbSBcIi4vYS1vcmRlci1zdGF0ZVwiO1xyXG5pbXBvcnQgeyBJT3JkZXJDb250ZXh0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1vcmRlci1jb250ZXh0XCI7XHJcbmltcG9ydCB7IE9SREVSX1NUQVRFIH0gZnJvbSBcIi4vb3JkZXItY29udGV4dFwiO1xyXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1hY3Rpb25cIjtcclxuaW1wb3J0IHsgQUNUSU9OX1JFUVVFU1RfRk9SIH0gZnJvbSBcIi4vb3JkZXItYWN0aW9uXCI7XHJcbmltcG9ydCB7IElPcmRlckRldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLW9yZGVyLWRldGFpbHNcIjtcclxuaW1wb3J0IHsgT3JkZXJDb21wbGV0ZVN0YXRlIH0gZnJvbSBcIi4vb3JkZXItY29tcGxldGUtc3RhdGVcIjtcclxuaW1wb3J0IHsgT3JkZXJDYW5jZWxTdGF0ZSB9IGZyb20gXCIuL29yZGVyLWNhbmNlbC1zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyU2hpcHBlZFN0YXRlIGV4dGVuZHMgT3JkZXJTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OklPcmRlckNvbnRleHQpe1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2Vzc0ZvclN0YXRlVHJhbnNpdGlvbihhY3Rpb246SUFjdGlvbik6dm9pZCB7XHJcbiAgICAgICAgaWYoYWN0aW9uLnR5cGUgPT09IEFDVElPTl9SRVFVRVNUX0ZPUi5DT01QTEVURSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jaGFuZ2VPcmRlclN0YXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyQ29tcGxldGVTdGF0ZSh0aGlzLmNvbnRleHQpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9JZiBJdGVtIHNoaXBwZWQgYW5kIHVzZXIgaW5pdGlhdGUgY2FuY2VsbGF0aW9uIFxyXG4gICAgLy8gdGhlbiBpdCB3b3VsZCByZXF1aXJlIHVzZXIgdG8gcGF5IGZvciBjYW5jZWxsYXRpb25cclxuICAgIGNhbmNlbE9yZGVyKG9yZGVyRGV0YWlsczpJT3JkZXJEZXRhaWxzKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbmNlbGxhdGlvbkNoYXJnZXMob3JkZXJEZXRhaWxzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2hhbmdlT3JkZXJTdGF0ZShcclxuICAgICAgICAgICAgbmV3IE9yZGVyQ2FuY2VsU3RhdGUodGhpcy5jb250ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5jZWxsYXRpb25DaGFyZ2VzKG9yZGVyRGV0YWlsczpJT3JkZXJEZXRhaWxzKXtcclxuICAgICAgICBvcmRlckRldGFpbHMuY2FuY2VsbGF0aW9uX2Nvc3QgPSA1O1xyXG4gICAgICAgIGlmKG9yZGVyRGV0YWlscy5pdGVtX2Nvc3QgPiA1MDAgJiYgb3JkZXJEZXRhaWxzLml0ZW1fd2VpZ2ggPiA0KXtcclxuICAgICAgICAgICAgb3JkZXJEZXRhaWxzLmNhbmNlbGxhdGlvbl9jb3N0ID0gMTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gT1JERVJfU1RBVEUuU0hJUFBFRDtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9