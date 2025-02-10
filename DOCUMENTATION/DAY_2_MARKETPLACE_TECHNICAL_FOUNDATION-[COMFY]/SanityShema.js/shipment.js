export const shipment = { 

    name: "shipment", 
  
    title: "Shipment", 
  
    type: "document", 
  
    fields: [ 
  
      { name: "orderId", type: "reference", to: [{ type: "order" }], title: "Order", validation: Rule => Rule.required() }, 
  
      { name: "trackingNumber", type: "string", title: "Tracking Number", validation: Rule => Rule.required() }, 
  
      { name: "carrier", type: "string", title: "Shipping Carrier", options: { list: ["DHL", "FedEx", "TCS", "Leopards"] }, validation: Rule => Rule.required() }, 
  
      { name: "status", type: "string", title: "Shipment Status", options: { list: ["in transit", "out for delivery", "delivered"] }, validation: Rule => Rule.required() }, 
  
      { name: "estimatedDelivery", type: "datetime", title: "Estimated Delivery Date" } 
  
    ], 
  
  }; 
  export default shipment;