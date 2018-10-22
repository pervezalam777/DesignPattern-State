import { OrderState } from "./a-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { ORDER_STATE } from "./order-context";
import { IAction } from "../interfaces/i-action";
import { ACTION_REQUEST_FOR } from "./order-action";
import { IOrderDetails } from "../interfaces/i-order-details";
import { OrderCompleteState } from "./order-complete-state";
import { OrderCancelState } from "./order-cancel-state";

export class OrderShippedState extends OrderState {
    constructor(context:IOrderContext){
        super(context);
    }

    accessForStateTransition(action:IAction):void {
        if(action.type === ACTION_REQUEST_FOR.COMPLETE){
            this.context.changeOrderState(
                new OrderCompleteState(this.context))
        }
    }
    
    //If Item shipped and user initiate cancellation 
    // then it would require user to pay for cancellation
    cancelOrder(orderDetails:IOrderDetails):void {
        this.cancellationCharges(orderDetails);
        this.context.changeOrderState(
            new OrderCancelState(this.context));
    }

    private cancellationCharges(orderDetails:IOrderDetails){
        orderDetails.cancellation_cost = 5;
        if(orderDetails.item_cost > 500 && orderDetails.item_weigh > 4){
            orderDetails.cancellation_cost = 15;
        }
    }

    getState():string {
        return ORDER_STATE.SHIPPED;
    }

}