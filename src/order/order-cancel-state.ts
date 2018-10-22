//const OrderState = require("./order-state")
import { OrderState } from "./a-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { ORDER_STATE } from "./order-context";
import { IAction } from "../interfaces/i-action";
import { IOrderDetails } from "../interfaces/i-order-details";
import { IOrderState } from "../interfaces/i-order-state";


export class OrderCancelState implements IOrderState {
    private context:IOrderContext
    constructor(context:IOrderContext){
        this.context = context;
    }

    accessForStateTransition(action:IAction):void {
        // do nothing
        throw new Error("this order is cancelled please place new order.")
    }

    cancelOrder(orderDetails:IOrderDetails):void {
        // Do nothing;
        throw new Error("can not cancel order which is already canceled")
    }

    getState():string {
        return ORDER_STATE.CANCELED
    }

}