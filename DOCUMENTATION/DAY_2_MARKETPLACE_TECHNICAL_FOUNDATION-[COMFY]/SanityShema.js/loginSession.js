export const loginSession = { 

    name: "loginSession", 
  
    title: "Login Session", 
  
    type: "document", 
  
    fields: [ 
  
      { name: "userId", type: "reference", to: [{ type: "user" }], title: "User", validation: Rule => Rule.required() }, 
  
      { name: "token", type: "string", title: "JWT Token", validation: Rule => Rule.required() }, 
  
      { name: "expiresAt", type: "datetime", title: "Token Expiry", validation: Rule => Rule.required() } 
  
    ], 
  
  }; 
  export default loginSession;