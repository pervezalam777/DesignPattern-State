import { OrderState } from "./a-order-state";
import { IOrderContext } from "../interfaces/i-order-context";
import { ORDER_STATE } from "./order-context";
import { IAction } from "../interfaces/i-action";
import { ACTION_REQUEST_FOR } from "./order-action";
import { OrderApproveState } from "./order-approve-state";
import { IOrderDetails } from "../interfaces/i-order-details";
import { OrderPendingState } from "./order-pending-state";

export class OrderNewState extends OrderState {
    constructor(context:IOrderContext){
        super(context);
    }

    accessForStateTransition(action:IAction):void {
        if(action.type === ACTION_REQUEST_FOR.APPROVAL) {
            this.processForApproval(action)  
        } else if(action.type === ACTION_REQUEST_FOR.PENDING){
            this.processForPending(action)
        }
    }

    private processForApproval(action:IAction){
        //TODO: Write logic to check if order can be approve
        // on the bases of user previous record
        // and authenticity
        let details:IOrderDetails = action.data;
        if(details.user_id !== null){
            this.context.changeOrderState(
                new OrderApproveState(this.context));
        } else {
            this.cancelOrder(details);
        }     
    }

    private processForPending(action:IAction){
        this.context.changeOrderState(
            new OrderPendingState(this.context));
    }

    getState():string {
        return ORDER_STATE.NEW;
    }

}