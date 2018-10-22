import { IOrderContext, IOrder } from "../interfaces/i-order-context";
import { OrderNewState } from "./order-new-state";
import { IOrderState } from "../interfaces/i-order-state";
import { IAction } from "../interfaces/i-action";
import { ACTION_REQUEST_FOR } from "./order-action";
import { IOrderDetails } from "../interfaces/i-order-details";


export const ORDER_STATE = {
    NEW:"new",
    APPROVED:"approved",
    PACKED:"packed",
    PENDING:"pending",
    HOLD:"holding",
    SHIPPED:"shipped",
    COMPLETED:"completed",
    CANCELED:"canceled"
}

export class OrderContext implements IOrderContext, IOrder {
    private state:IOrderState
    private orderDetails:IOrderDetails
    
    constructor(order:IOrderDetails){
        this.orderDetails = order;
        this.orderDetails.status = ORDER_STATE.NEW;
        this.state = new OrderNewState(this);
    }

    changeOrderState(state:IOrderState):void {
        this.state = state;
        this.orderDetails.status = this.state.getState();
        // dispatch event to outer system that state has changed
    }

    requestStateChange(action:IAction):void{
        if (action.type === ACTION_REQUEST_FOR.CANCEL){
            this.state.cancelOrder(this.orderDetails);
        } else {
            action.data = this.orderDetails;
            this.state.accessForStateTransition(action);
        }
    }

    //Actual order should not be modified by outsiders
    getOrderDetails():IOrderDetails {
        return Object.assign({},this.orderDetails);
    }
}