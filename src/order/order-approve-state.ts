import { OrderState } from "./a-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { ORDER_STATE } from "./order-context";
import { IAction } from "../interfaces/i-action";
import { ACTION_REQUEST_FOR } from "./order-action";
import { OrderPendingState } from "./order-pending-state";
import { OrderShippedState } from "./order-shipped-state";
import { IOrderState } from "../interfaces/i-order-state";

export class OrderApproveState extends OrderState implements IOrderState {
    constructor(context:IOrderContext){
        super(context);
    }

    accessForStateTransition(action:IAction):void {
        if(action.type === ACTION_REQUEST_FOR.PENDING){
            this.context.changeOrderState(
                new OrderPendingState(this.context));
        } else if(action.type === ACTION_REQUEST_FOR.SHIPPED){
            //TODO: Assess if item is reached to warehouse
            // only then it can be shipped.
            this.context.changeOrderState(
                new OrderShippedState(this.context))
        }
    }

    getState():string {
        return ORDER_STATE.APPROVED;
    }

}