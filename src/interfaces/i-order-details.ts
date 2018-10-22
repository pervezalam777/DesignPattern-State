export interface IOrderDetails {
    no:number,
    item_id:string,
    item_weigh:number
    item_cost:number,
    user_id:string,
    status:string,

    gst:number,
    discount:number,
    shipping_charges:number,
    cancellation_cost:number,
    pay_amount:number,
    paid:boolean
}