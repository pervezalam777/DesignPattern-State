
import { IOrderDetails } from "./interfaces/i-order-details";
import { IOrder } from "./interfaces/i-order-context";
import { OrderContext, ORDER_STATE } from "./order/order-context";
import { IAction } from "./interfaces/i-action";
import { ACTION_REQUEST_FOR } from "./order/order-action";
import {OrderState} from "./order/a-order-state"

class Bootstrap {
    private orderDOne:IOrderDetails;
    private orderDTwo:IOrderDetails;
    private orderOne:IOrder | null = null;
    private orderTwo:IOrder | null = null;
    constructor(){
        this.orderDOne = {
            no:234,
            cancellation_cost:0,
            discount:0,
            gst:8,
            item_cost:300,
            item_id:"001",
            item_weigh:2,
            paid:false,
            pay_amount: 380,
            shipping_charges:50,
            status:"",
            user_id:"001"
        }
        this.orderDTwo = Object.assign({}, this.orderDOne);
        this.orderDTwo.item_id = "001";

    }

    initialize(){
        this.orderOne = new OrderContext(this.orderDOne);
        this.orderTwo = new OrderContext(this.orderDTwo);
       
        console.log("first order -------------------");
        this.requestForApproval(this.orderOne);
        this.requestForShipped(this.orderOne);
        this.requestForComplete(this.orderOne);
        this.requestForCancel(this.orderOne);

        console.log("second order -------------------");
        this.requestForPending(this.orderTwo);
        this.requestForApproval(this.orderTwo);
        this.requestForShipped(this.orderTwo);
        this.requestForCancel(this.orderTwo);

    }

    requestForApproval(order:IOrder){
        console.log("Before: Aproval --");
        console.log(order.getOrderDetails());

        let action:IAction = {
            type:ACTION_REQUEST_FOR.APPROVAL
        }
        order.requestStateChange(action);

        console.log("After: Aproval --");
        console.log(order.getOrderDetails())
    }

    requestForPending(order:IOrder){
        console.log("Before: Pending --");
        console.log(order.getOrderDetails());

        let action:IAction = {
            type:ACTION_REQUEST_FOR.PENDING
        }
        order.requestStateChange(action);

        console.log("After: Pending --");
        console.log(order.getOrderDetails());
    }

    requestForCancel(order:IOrder){
        console.log("Before: Cancel --");
        console.log(order.getOrderDetails());

        let action:IAction = {
            type:ACTION_REQUEST_FOR.CANCEL
        }
        order.requestStateChange(action);

        console.log("After: Cancel --");
        console.log(order.getOrderDetails());
    }

    requestForShipped(order:IOrder){
        console.log("Before: Shipped --");
        console.log(order.getOrderDetails());

        let action:IAction = {
            type:ACTION_REQUEST_FOR.SHIPPED
        }
        order.requestStateChange(action);

        console.log("After: Shipped --");
        console.log(order.getOrderDetails());
    }

    requestForComplete(order:IOrder) {
        console.log("Before: Complete --");
        console.log(order.getOrderDetails());

        let action:IAction = {
            type:ACTION_REQUEST_FOR.COMPLETE
        }
        order.requestStateChange(action);

        console.log("After: Complete --");
        console.log(order.getOrderDetails());
    }
}   

let boot = new Bootstrap();
boot.initialize();  