import { IAction } from "./i-action";
import { IOrderDetails } from "./i-order-details";

export interface IOrderState {
    accessForStateTransition(action:IAction):void
    cancelOrder(orderDetails:IOrderDetails):void
    getState():string
    //possibleStateTransition():Array<string>
}