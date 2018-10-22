import { OrderState } from "./a-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { ORDER_STATE } from "./order-context";
import { IAction } from "../interfaces/i-action";
import { ACTION_REQUEST_FOR } from "./order-action";
import { OrderShippedState } from "./order-shipped-state";

export class OrderPendingState extends OrderState {
    constructor(context:IOrderContext){
        super(context);
    }

    accessForStateTransition(action:IAction):void {
        //TODO: Assess if item is reached to warehouse
        // only then it can be shipped.
        if(action.type === ACTION_REQUEST_FOR.SHIPPED){
            this.context.changeOrderState(
                new OrderShippedState(this.context))
        }
    }

    getState():string {
        return ORDER_STATE.PENDING;
    }

}