import { OrderState } from "./a-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { ORDER_STATE } from "./order-context";
import { IAction } from "../interfaces/i-action";
import { IOrderDetails } from "../interfaces/i-order-details";


export class OrderCompleteState extends OrderState {
    constructor(context:IOrderContext){
        super(context);
    }

    accessForStateTransition(action:IAction):void {
        // do nothing for now
        console.log("No more transition allowed for now");
    }

    cancelOrder(orderDetails:IOrderDetails):void {
        console.log("can not cancel once delivered.... ")
    }

    getState():string {
        return ORDER_STATE.COMPLETED;
    }

}