export const user = { 

    name: "user", 
  
    title: "User", 
  
    type: "document", 
  
    fields: [ 
  
      { name: "email", type: "string", title: "Email", validation: Rule => Rule.required() }, 
  
      { name: "password", type: "string", title: "Password", description: "Hashed password" }, 
  
      { name: "name", type: "string", title: "Name", validation: Rule => Rule.required() }, 
  
      { name: "createdAt", type: "datetime", title: "Created At", initialValue: new Date().toISOString() } 
  
    ], 
  
  }; 

  export default user;