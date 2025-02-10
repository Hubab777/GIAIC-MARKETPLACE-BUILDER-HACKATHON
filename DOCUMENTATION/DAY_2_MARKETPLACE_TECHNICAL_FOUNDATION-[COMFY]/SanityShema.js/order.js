
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        to: [{ type: 'customer' }],
      },
      {
        name: 'lastName',
        type:'string',
        title:'Last Name',
      },
      {
        name: 'address',
        type:'string',
        title:'Address',
      },
      {
        name: 'city',
        type:'string',
        title:'City',
      },
      {
        name: 'zipcode',
        type:'string',
        title:'Zip Code',
      },
      {
        name: 'phone',
        type:'string',
        title:'Phone',
      },
      {
        name: 'email',
        type:'string',
        title:'Email',
      },
      {
        name: 'discount',
        type: 'number',
        title: 'Discount',

      },
      {
        name: 'cartItems',
        type: 'array',
        of: [{ type: 'reference' , to:{ type : 'product'} }], //This product is taken from main name of productschema
        title: 'Cart Items',
      },
      {
        name: 'total',
        type: 'number',
        title: 'Total',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value:'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
          layout: 'radio',
        },
        initialvalue : 'pending'
      },


    ]
}