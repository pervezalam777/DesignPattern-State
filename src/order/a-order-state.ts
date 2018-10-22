import { IOrderState } from "../interfaces/i-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { IAction } from "../interfaces/i-action";
import { IOrderDetails } from "../interfaces/i-order-details";
import { OrderCancelState } from "./order-cancel-state";

export class OrderState implements IOrderState {
    protected context:IOrderContext;

    constructor(context:IOrderContext){
        this.context = context;
    }

    accessForStateTransition(action:IAction):void {
        throw new Error("Method should be overriden by drive class")
    }

    cancelOrder(orderDetails:IOrderDetails):void {
        //there is a issue with circular referencing
        // So cancel state does not inherits orderstate
        this.context.changeOrderState(
            new OrderCancelState(this.context));
    }

    possibleStateTransition():Array<string>{
        return [];
    }

    getState():string {
        return "improper state"
    }
}
