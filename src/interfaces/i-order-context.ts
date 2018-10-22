import { IOrderState } from "./i-order-state";
import { IAction } from "./i-action";
import { IOrderDetails } from "./i-order-details";

export interface IOrderContext {
    changeOrderState(state:IOrderState):void
}

export interface IOrder {
    requestStateChange(action:IAction):void
    getOrderDetails():IOrderDetails
}