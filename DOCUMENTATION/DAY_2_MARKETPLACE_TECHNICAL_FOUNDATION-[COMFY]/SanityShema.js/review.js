export const review = { 

    name: "review", 
  
    title: "Review", 
  
    type: "document", 
  
    fields: [ 
  
      { name: "userId", type: "reference", to: [{ type: "user" }], title: "User", validation: Rule => Rule.required() }, 
  
      { name: "productId", type: "string", title: "Product ID", validation: Rule => Rule.required() }, 
  
      { name: "rating", type: "number", title: "Rating", validation: Rule => Rule.required().min(1).max(5) }, 
  
      { name: "comment", type: "text", title: "Review Comment" }, 
  
      { name: "createdAt", type: "datetime", title: "Review Created At", initialValue: new Date().toISOString() } 
  
    ], 
  
  };  
  export default review;